import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-grand-child',
  templateUrl: './grand-child.component.html',
  styleUrls: ['./grand-child.component.scss']
})
export class GrandChildComponent implements OnInit {

  constructor() { }
  @Output() sendToChild = new EventEmitter<string>();

  ngOnInit(): void {
  }

  submit(output: string): void{
    this.sendToChild.emit(output);
  }
}
