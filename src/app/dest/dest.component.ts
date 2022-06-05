import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dest',
  templateUrl: './dest.component.html',
  styleUrls: ['./dest.component.scss']
})
export class DestComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) { }

  name?: string;
  age?: number;

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log(params);
      this.name = params["name"];
      this.age = <number>params["age"];
    })
  }
}
