import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  template: `
      <ul> <li *ngFor="let list of lists"> {{list}}</li>
      </ul>
  `,
  styles: []
})
export class ListComponent implements OnInit {
  @Input() lists;
  constructor() { }

  ngOnInit() {
  }

}
