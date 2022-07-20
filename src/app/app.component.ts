import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  public name: string = "";

  constructor(private appService: AppService) {}

  ngOnInit(){
    // 値を購読
    this.appService.name.subscribe(name => {
      this.name = name;
    });
  }

  changeName(name: string): void {
    this.appService.changeName(name);
  }
}

import { BehaviorSubject } from 'rxjs';
const subject = new BehaviorSubject(0);

subject.subscribe({
  next: (v) => console.log(`observer1: ${v}`),
});

subject.next(1);
subject.next(2);

subject.subscribe({
  next: (v) => console.log(`observer2: ${v}`),
});

subject.next(3);
