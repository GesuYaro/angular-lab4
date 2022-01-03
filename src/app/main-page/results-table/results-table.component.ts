import { Component, OnInit } from '@angular/core';
import {results} from './results';

@Component({
  selector: 'app-results-table',
  templateUrl: './results-table.component.html',
  styleUrls: ['./results-table.component.css']
})
export class ResultsTableComponent implements OnInit {
  
  results = results;

  constructor() { }

  ngOnInit() {
  }

}