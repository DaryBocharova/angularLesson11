import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'comp2',
  template: `
    <h1>app</h1>
    <comp2></comp2>
  `,
  styles: ['h1 { font-weight: normal; }']
})
export class Comp2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
