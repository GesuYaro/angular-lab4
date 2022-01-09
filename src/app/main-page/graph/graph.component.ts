import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from "rxjs";

import { Result } from '../results-table/results';
import { HitUpdaterService } from '../../services/hit-updater.service'

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  hitServiceSubscription!: Subscription;
  private resultsGraph : Result[] = [];
  hitService : HitUpdaterService;

  getResults(): Result[] {
    return this.resultsGraph;
  }

  readonly dashes = Array<number>();
  r = 2;
  Dpath = '';

  @Input() set radius(num: number) {
    this.r = num;
    if (this.r >= 0) {
      this.updateDpath();
    }
  }

  constructor(hitService : HitUpdaterService) { 
    this.hitService = hitService;
    this.updateDpath();
    for (let i = 30; i <= 270; i += 60) {
      this.dashes.push(i);
    }
  }

  ngOnInit() {
    this.hitServiceSubscription = this.hitService.hitRequestStatus$.subscribe({
      next: value => {
        if (value != null) {
          if (value.length >= this.resultsGraph.length) {
            // console.log("replace", value);
            this.resultsGraph = value;
          } else {
            // console.log("push", value);
            // this.resultsGraph.push(value as unknown as Result);
          }
        }
      }
    });
    console.log("graph", this.resultsGraph);
    // this.hitService.getAllHits();
  }

  updateDpath() {
    this.Dpath = `M 150 150
                  L 150 ${150 + this.r * 60}
                  L ${150 - this.r * 30} ${150 + this.r * 60}
                  L ${150 - this.r * 30} 150
                  L ${150 - this.r * 60} 150
                  L 150 ${150 - this.r * 60}
                  L 150 ${150 - this.r * 30}
                  A ${this.r * 30} ${this.r * 30} 0 0 1 ${150 + this.r * 30} 150
                  L 150 150
                  `
  }

  checkHit(event: MouseEvent) {
    let x = Number.parseFloat(((event.offsetX - 150) / 60).toFixed(2));
    let y = Number.parseFloat(((event.offsetY - 150) / -60).toFixed(2));
    if (x < -5 || x > 5 || y < -5 || y > 5) return;
    if (this.r >= 0) {
      this.hitService.addHit(x, y, this.r);
    }
  }

}