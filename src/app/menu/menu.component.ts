import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() menu: any;
  @Output() menuEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  submit(menu: any): void {
    this.menuEvent.emit(menu);
    console.log("submit", menu);
  }

  send(menu: any): void{
    console.log(this.menu);
    console.log("send", menu);
    this.submit(menu);
  }
}
