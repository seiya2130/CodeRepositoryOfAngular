import { Component } from '@angular/core';
import { of, Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CodeRepositoryOfAngular';
}

const observable = of(1, 2, 3);

const observer: Observer<number> = {
  next: (value) => console.log(`next:${value}`),
  error: (err) => console.log(err),
  complete: () => console.log("complete"),
}

observable.subscribe(observer);
