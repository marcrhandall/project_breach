import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass'],
})
export class NavComponent implements OnInit {

  isDrawerOpen: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  toggleDrawer() {
    this.isDrawerOpen = this.isDrawerOpen ? false : true;
    if (this.isDrawerOpen) {
      console.log('opening drawer');
    } else {
      console.log('closing drawer');
    }
  }
}
