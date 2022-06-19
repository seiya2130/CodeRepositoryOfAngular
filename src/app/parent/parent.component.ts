import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  public formGroup: FormGroup = new FormGroup({})

  constructor() {
    this.formGroup.addControl('name', new FormControl(
    ))
  }

  ngOnInit(): void {
  }

  submit(): void {
    console.log(this.formGroup.controls["name"].value)
  }

}
