import { Component, OnInit } from '@angular/core';
import { Subscription } from "rxjs";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Result } from './results';
import { HitUpdaterService } from '../../services/hit-updater.service'

@Component({
  selector: 'app-results-table',
  templateUrl: './results-table.component.html',
  styleUrls: ['./results-table.component.css']
})
export class ResultsTableComponent implements OnInit {
  
  hitServiceSubscription!: Subscription;
  results : Result[] = [];
  hitService : HitUpdaterService;

  constructor(hitService : HitUpdaterService) { 
    this.hitService = hitService;
  }

  ngOnInit() {
    
    this.hitServiceSubscription = this.hitService.hitRequestStatus$.subscribe({
      next: value => {
        if (value != null) {
          if (value.length == 1) {
            this.results.push(value[0]);
          } else if (value.length > 1) {
            this.results = value;
          } else {
            this.results.push(value as unknown as Result);
          }
        }
      }
    });
    
    this.hitService.getAllHits();
  }


}