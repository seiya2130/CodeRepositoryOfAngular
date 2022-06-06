import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  constructor() { }

  inputText?: string
  outputText?: string

  ngOnInit(): void {
  }

  getOutput(output: string){
    this.outputText = output;
  }

}
