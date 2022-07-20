import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

const subject = new BehaviorSubject<string>("test");

// subject.subscribe({
//   next: (v) => console.log(`observer1: ${v}`),
// });


// subject.next("hoge");

// subject.subscribe({
//   next: (v) => console.log(`observer2: ${v}`),
// });

// subject.next("fuga");
// subject.next("piyo");

const observable = new Observable(subscriber => {
  subscriber.next("hoge");
  subscriber.next("fuga");
  subscriber.next("piyo");
});

observable.subscribe({
  next: (v) => console.log(`observer1: ${v}`),
});

observable.subscribe({
  next: (v) => console.log(`observer2: ${v}`),
});

