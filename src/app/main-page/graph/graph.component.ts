import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  readonly dashes = Array<number>();
  r = 2;
  Dpath = '';

  @Input() set radius(num: number) {
    this.r = num;
    this.updateDpath();
  }

  constructor() { 
    this.updateDpath();
    for (let i = 30; i <= 270; i += 60) {
      this.dashes.push(i);
    }
  }

  ngOnInit() {
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
                  `
  }

}