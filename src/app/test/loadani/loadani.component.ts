import { Component, OnInit } from '@angular/core';
import * as _ from 'underscore';


@Component({
  selector: 'app-loadani',
  templateUrl: './loadani.component.html',
  styleUrls: ['./loadani.component.css']
})
export class LoadaniComponent implements OnInit {

  constructor() {
    const myArray: number[] = [9, 1, 5];
    const lastItem: number = _.last(myArray); // Using underscore
    console.log(lastItem); // 5
  }

  ngOnInit() {}
}
