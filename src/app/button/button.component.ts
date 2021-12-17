import { Component, EventEmitter, OnInit, ViewEncapsulation, Input, Output } from '@angular/core';


@Component({
  selector: 'app-button',
  template: `
    <button (click)="handleClick()">{{ numberOfClicks }}</button>
  `,
  styles: [
  ],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ButtonComponent implements OnInit {

  @Input() label: string;
  @Output() action = new EventEmitter();

  numberOfClicks = 0;

  constructor() { 
    this.label = "0";
  }

  ngOnInit(): void {
  }

  handleClick() {
    this.numberOfClicks++;
    this.action.emit(this.numberOfClicks);
  }

}
