import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>{{ counter }}</h3>

    <button (click)="increaseBy(1)">+1</button>
    <button (click)="reset()">reset</button>
    <button (click)="increaseBy(-1)">-1</button>

  `
})

export class CounterComponent {

  public counter: number = 10;
  public defaultValue: number = 10;

  constructor() { }

  increaseBy( value: number): void {
    this.counter += value;
  }

  reset(){
    this.counter = this.defaultValue;
  }

}
