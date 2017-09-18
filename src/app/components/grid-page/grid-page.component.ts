import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'justech-grid-page',
  templateUrl: './grid-page.component.html',
  styleUrls: ['./grid-page.component.css']
})
export class GridPageComponent implements OnInit {
  buttons: Array<any>;
  content: any;
  constructor() {

  }

  ngOnInit() {
    this.content = {
      title: '通用数据列表组件',
      cols: [
        { field: 'num', header: 'Num', type: 'text' },
        { field: 'vin', header: 'Vin', type: 'select' },
        { field: 'year', header: 'Year' },
        { field: 'brand', header: 'Brand' },
        { field: 'color', header: 'Color' }
      ],
      data: [
        { num: "1", vin: "asdfasda", year: "1990", brand: "vw", color: "wihte" },
        { num: "2", vin: "xcvxv", year: "1991", brand: "vw", color: "blue" },
        { num: "3", vin: "asdfasda", year: "1992", brand: "vw", color: "black" },
        { num: "4", vin: "g3ersfdsg", year: "1993", brand: "vw", color: "pink" },
        { num: "5", vin: "asdfasda", year: "1994", brand: "vw", color: "yellow" },
        { num: "6", vin: "sdf", year: "1995", brand: "vw", color: "green" },
        { num: "7", vin: "asdfasda", year: "1996", brand: "vw", color: "wihte" },
        { num: "8", vin: "asdfasda", year: "1997", brand: "vw", color: "blue" },
        { num: "9", vin: "sdf", year: "1998", brand: "vw", color: "black" },
        { num: "10", vin: "asdfasda", year: "1999", brand: "vw", color: "pink" },
        { num: "11", vin: "dffd", year: "2000", brand: "vw", color: "yellow" },
        { num: "12", vin: "gh", year: "2001", brand: "vw", color: "green" },
        { num: "13", vin: "dfgh", year: "2002", brand: "vw", color: "wihte" },
        { num: "14", vin: "fdg", year: "2003", brand: "vw", color: "blue" },
        { num: "15", vin: "h", year: "2004", brand: "vw", color: "black" },
        { num: "16", vin: "fdgh", year: "2005", brand: "vw", color: "pink" },
        { num: "17", vin: "sdg3ger", year: "2006", brand: "bmw", color: "yellow" },
        { num: "18", vin: "ret", year: "2007", brand: "bmw", color: "green" },
        { num: "19", vin: "wert", year: "2008", brand: "bmw", color: "wihte" },
        { num: "20", vin: "qer", year: "2009", brand: "bmw", color: "blue" },
        { num: "21", vin: "twert", year: "2010", brand: "bmw", color: "black" },
        { num: "22", vin: "ewr", year: "2011", brand: "bmw", color: "pink" },
        { num: "23", vin: "twert", year: "2012", brand: "bmw", color: "yellow" },
        { num: "24", vin: "erwt", year: "2013", brand: "bmw", color: "green" },
        { num: "25", vin: "erwt3", year: "2014", brand: "bmw", color: "wihte" },
        { num: "26", vin: "t34t3", year: "2015", brand: "bmw", color: "blue" },
        { num: "27", vin: "4t", year: "2016", brand: "bmw", color: "black" },
        { num: "28", vin: "sdfg3", year: "2017", brand: "bmw", color: "pink" },
        { num: "29", vin: "er", year: "2018", brand: "bmw", color: "yellow" },
        { num: "30", vin: "t", year: "2019", brand: "bmw", color: "green" },
        { num: "31", vin: "erwt", year: "2020", brand: "bmw", color: "wihte" },
        { num: "32", vin: "sge3", year: "2021", brand: "bmw", color: "blue" },
        { num: "33", vin: "xdrvg", year: "2022", brand: "audi", color: "black" },
        { num: "34", vin: "er", year: "2023", brand: "audi", color: "pink" },
        { num: "35", vin: "ege", year: "2024", brand: "audi", color: "yellow" },
        { num: "36", vin: "rs", year: "2025", brand: "audi", color: "green" },
        { num: "37", vin: "ret", year: "2026", brand: "audi", color: "wihte" },
        { num: "38", vin: "ewrg", year: "2027", brand: "audi", color: "blue" },
        { num: "39", vin: "erg", year: "2028", brand: "audi", color: "black" },
        { num: "40", vin: "gh", year: "2029", brand: "audi", color: "pink" },
        { num: "41", vin: "sdfgdsf", year: "2030", brand: "audi", color: "yellow" },
        { num: "42", vin: "gh", year: "2031", brand: "audi", color: "green" },
        { num: "43", vin: "sdfgdsf", year: "2032", brand: "audi", color: "wihte" },
        { num: "44", vin: "sdfgdsf", year: "2033", brand: "audi", color: "blue" },
        { num: "45", vin: "sd", year: "2034", brand: "audi", color: "black" },
      ]
    };

    this.buttons = [
      { text: 'buttons.add', callback: (selection) => { alert('you selected: ' + JSON.stringify(selection)) } },
      { text: 'buttons.edit', callback: () => { alert('hello, i\'am edit') } },
      { text: 'buttons.delete', severity: 'ui-button-warning', callback: () => { alert('hello, i\'am delete') } },
      { text: 'buttons.batch-add', callback: () => { alert('hello, i\'am batch add') } },
      { text: 'buttons.batch-edit', callback: () => { alert('hello, i\'am batch edit') } },
      { text: 'buttons.batch-delete', severity: 'ui-button-danger', callback: () => { alert('hello, i\'am batch delete') } },
    ];
  }

}
