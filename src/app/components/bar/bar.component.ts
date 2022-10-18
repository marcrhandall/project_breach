import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.sass']
})
export class BarComponent implements OnInit {
  
  @Output() drawerEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  
  constructor() {
  }

  ngOnInit(): void {
  }
  
  onDrawerClick() {
    this.drawerEvent.emit(true)
    console.log('event')
  }

}
