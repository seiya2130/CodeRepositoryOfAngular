import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-async',
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.scss']
})
export class AsyncComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  nowTime = new Observable<string>((observer: Observer<string>) => {
    observer.next(new Date().toString());
    observer.complete();
  });
}
