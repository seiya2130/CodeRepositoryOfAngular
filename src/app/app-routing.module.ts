import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

const subject = new Subject<number>();

subject.subscribe({
  next: (v) => console.log(`observer1: ${v}`),
});

subject.subscribe({
  next: (v) => console.log(`observer2: ${v}`),
});

subject.next(1);
subject.next(2);
