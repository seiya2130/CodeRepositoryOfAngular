import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  public name: string = "";

  constructor(private appService: AppService) {}

  ngOnInit(){
    // 値を購読
    this.appService.name.subscribe(name => {
      this.name = name;
    });
  }

  changeName(name: string): void {
    this.appService.changeName(name);
  }
}
