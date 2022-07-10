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

const observable1 = interval(1000);
const observable2 = interval(2000);

let subscription1 = observable1.subscribe(x => console.log(`sub1:${x}`));
let subscription2 = observable2.subscribe(x => console.log(`sub2:${x}`));

subscription1.add(subscription2);

setInterval(() => {
  subscription1.unsubscribe()},
  3000);

// const observer: Observer<number> = {
//   next: (value) => console.log(`next:${value}`),
//   error: (err) => console.log(err),
//   complete: () => console.log("complete"),
// }

// const observer = {
// 	next: (value: number) => console.log(`next:${value}`),
// 	complete: () => console.log("complete"),
// };

//observable.subscribe(x => console.log(x));

// const observable = new Observable(function subscribe(subscriber) {
//   subscriber.next(1)
//   subscriber.next(2)
//   subscriber.complete();
// });

// observable.subscribe(x => console.log(x));




