import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  constructor() { }

  outputText?: string;
  @Input() inputText?: string;
  @Output() output: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {
  }

  submit(): void {
    this.output.emit(this.outputText);
  }

}
