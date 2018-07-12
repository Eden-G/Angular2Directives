import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Listapp';
  names: string[];
  val = false;
  color = 'red';

  constructor() {
    this.names = ['Ahmede', 'Edu', 'Mikee', 'Moke'];
  }

  displayMessage(newcolor) {
    console.log('The component color is changed to ' + newcolor);
  }
}
