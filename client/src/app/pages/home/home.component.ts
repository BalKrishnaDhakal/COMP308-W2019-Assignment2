/*
Student Name: Bal Krishna Dhakal
Student ID: 300916314
Description: COMP308-W2019-Assignment2
Date Created: March 30, 2019
Link to GitHub: https://github.com/BalKrishnaDhakal/COMP308-W2019-Assignment2
Link tto Heroku: https://comp308-w2019-assignment2-bal.herokuapp.com/home
Reference: Prof. Tom Tsiliopoulos's Class Demo
*/


/* --- This is code behind file of home page------*/

import { Component, OnInit } from '@angular/core';
import { BasePageComponent } from 'src/app/partials/base-page/base-page.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends BasePageComponent implements OnInit {

  constructor(route: ActivatedRoute) {
    super(route);

  }

  ngOnInit() {
  }

}
