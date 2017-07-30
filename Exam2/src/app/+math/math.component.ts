import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.scss']
})
export class MathComponent implements OnInit {

  first: string;
  second: string;
  result: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe( (routeParams: Params) => { 
      this.first = routeParams['first']
      this.second = routeParams['second'];
      this.result = `${Number(this.first)/Number(this.second)}`;
     });
  }

}
