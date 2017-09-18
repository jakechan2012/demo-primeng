import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'justech-fa',
  templateUrl: './function-area.component.html',
  styleUrls: ['./function-area.component.css']
})
export class FunctionAreaComponent implements OnInit {
  @Input() buttons: Array<any>;
  @Input() dataSelection: any;
  constructor() { }

  ngOnInit(): void {
    if (!this.buttons) {
      this.buttons = [];
    }
  }
}
