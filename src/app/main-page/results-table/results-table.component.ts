import { Component, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Result } from './results';
import { HitCheckService } from '../../services/hit-check.service'

@Component({
  selector: 'app-results-table',
  templateUrl: './results-table.component.html',
  styleUrls: ['./results-table.component.css']
})
export class ResultsTableComponent implements OnInit {
  
  results : Result[];
  hitCheckService : HitCheckService;

  constructor(hitCheckService : HitCheckService) { 
    this.hitCheckService = hitCheckService;
    this.updateResults();
  }

  ngOnInit() {
    
  }

  

  updateResults() {
    this.hitCheckService.getPointsRequest()
      .subscribe((data: Result[]) => this.results = data);
  }

}