import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'comp3',
  template: `
  <h1>app</h1>
  <comp2></comp2>
`,
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
