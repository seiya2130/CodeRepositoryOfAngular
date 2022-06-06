import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  constructor() { }
  @Output() sendToParent = new EventEmitter<string>();
  ngOnInit(): void {
  }

  submit(output: string): void{
    this.sendToParent.emit(output);
  }
}
