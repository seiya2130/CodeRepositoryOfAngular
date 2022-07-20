import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public name = new BehaviorSubject<string>("test");
  constructor() { }

  changeName(name: string): void {
    // 値を送信
    this.name.next(name);
  }
}
