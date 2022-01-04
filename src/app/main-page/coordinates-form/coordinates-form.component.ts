import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { RegExValidator } from './RegExValidator';

@Component({
  selector: 'app-coordinates-form',
  templateUrl: './coordinates-form.component.html',
  styleUrls: ['./coordinates-form.component.css']
})
export class CoordinatesFormComponent implements OnInit {

  x = new FormControl(null, [
    Validators.required,
  ]);

  y = new FormControl(null, [
    Validators.required,
    RegExValidator.patternValidator(/\b-?[0-5]\b/, {isInRange: true}),
  ]);

  r = new FormControl(null, [
    Validators.required,
    Validators.min(0),
  ]);

  constructor() { }

  ngOnInit() {
  }

  submit() : void {
    if (this.x.valid && this.y.valid && this.r.valid) {
      console.log(this.x.value, this.y.value, this.r.value);
    } else {
      this.x.markAsTouched();
      this.y.markAsTouched();
      this.r.markAsTouched();
    }
  }

}