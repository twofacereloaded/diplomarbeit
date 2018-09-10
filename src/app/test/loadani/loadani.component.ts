import { Component, OnInit } from '@angular/core';
import * as _ from 'underscore';
import * as __ from 'lodash';

declare var jsSHA: any;

@Component({
  selector: 'app-loadani',
  templateUrl: './loadani.component.html',
  styleUrls: ['./loadani.component.css']
})
export class LoadaniComponent implements OnInit {

  shaObj: any;
  
  constructor() {
    const myArray: number[] = [9, 1, 5];
    const lastItem: number = _.last(myArray); // Using underscore
    console.log(lastItem); // 5
    this.shaObj = new jsSHA("SHA-512", "TEXT");
    this.shaObj.update("This is a test");
    console.log(this.shaObj.getHash("HEX"));
    console.log(__.random(1, 100));
  }

  ngOnInit() {}
}
