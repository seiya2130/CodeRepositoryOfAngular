import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-src',
  templateUrl: './src.component.html',
  styleUrls: ['./src.component.scss']
})
export class SrcComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  navigateLink(): void {
    this.router.navigate(['/dest-component'], { queryParams: { name: 'Bob', age: "20" } });
  }
}
