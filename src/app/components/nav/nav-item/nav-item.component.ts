import { Component, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.sass']
})
export class NavItemComponent implements OnInit {

  @Input()
  label?: string;
  @Input()
  link?: string;
  @Input()
  icon?: string;
  @Input()
  compact: boolean = false

  isActive?: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  getIcon(): string {
    let icon = this.icon ? this.icon : ""
    if(this.isActive) {
      icon = icon.replace('-outline','')
    }
    return icon
    
  }

  onActiveChange(e: boolean) {
    this.isActive = e
  }

}
