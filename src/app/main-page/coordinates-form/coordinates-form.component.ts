import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { RegExValidator } from './RegExValidator';

@Component({
  selector: 'app-coordinates-form',
  templateUrl: './coordinates-form.component.html',
  styleUrls: ['./coordinates-form.component.css']
})
export class CoordinatesFormComponent implements OnInit {

  @Output() onRadiusChange = new EventEmitter<number>()

  x = new FormControl(null, [
    Validators.required,
  ]);

  y = new FormControl(null, [
    Validators.required,
    RegExValidator.patternValidator(/\b-?\d\b/, {isInRange: true}),
    Validators.min(-5),
    Validators.max(5),
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

  changeRadius() {
    if (this.r.value === '') return;
    let numRad = Number.parseFloat(this.r.value);
    if (numRad < 0) {
      this.r.markAsTouched();
      return;
    }
    this.onRadiusChange.emit(numRad);
  }

}