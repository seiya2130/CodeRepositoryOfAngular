import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CodeRepositoryOfAngular';
  menu: any = {
    name: "menu1",
    menu: {
      name: "menu2",
      menu: {
        name: "menu3",
        menu: {}
      }
    }
  }
}
