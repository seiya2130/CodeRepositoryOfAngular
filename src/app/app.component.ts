import { Component } from '@angular/core';
import { of, Observable, Observer, filter, map, interval } from 'rxjs';

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

of(1, 2, 3, 4, 5)
  .pipe(
    filter(x => x % 2 == 0),
    map(x => x * x))
  .subscribe((x) => console.log(x));

const observable = interval(1000);
observable.subscribe(x => console.log(x));


