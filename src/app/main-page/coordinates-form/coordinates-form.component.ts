import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

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
  ]);

  r = new FormControl(null, [
    Validators.required,
  ]);

  constructor() { }

  ngOnInit() {
  }

}