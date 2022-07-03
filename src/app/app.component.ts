import { Component } from '@angular/core';
import { of, Observable, Observer, filter, map, interval, from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CodeRepositoryOfAngular';

}

// const observable = of(1, 2, 3);

// const observer: Observer<number> = {
//   next: (value) => console.log(`next:${value}`),
//   error: (err) => console.log(err),
//   complete: () => console.log("complete"),
// }

// observable.subscribe(observer);

const observable = new Observable(function subscribe(subscriber) {
  subscriber.next(1)
  subscriber.next(2)
  setInterval(() => {
    subscriber.next('Hello World');
  }, 1000);
});

const a = observable.subscribe(x => console.log(x));
a.unsubscribe()



