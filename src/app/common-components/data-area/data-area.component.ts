import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'justech-da',
  templateUrl: './data-area.component.html',
  styleUrls: ['./data-area.component.css']
})
export class DataAreaComponent implements OnInit {
  /**
   * {
   *   title: string,
   *   data: Arrary<any>,
   *   cols: Arrary<any>
   * }
   */
  @Input() content: any;
  @Input() rows: number;
  @Input() multiSelect: boolean;
  selection: any;
  private selectionMode: string;
  constructor() { }

  ngOnInit(): void {
    if (!this.content) {
      this.content = {};
    }
    if (!this.rows) {
      this.rows = 10
    }
    this.selectionMode = this.multiSelect ? 'multiple' : 'single';
  }

}
