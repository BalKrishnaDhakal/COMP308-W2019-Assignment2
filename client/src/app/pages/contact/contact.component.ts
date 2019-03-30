/*
Student Name: Bal Krishna Dhakal
Student ID: 300916314
Description: COMP308-W2019-Assignment2
Date Created: March 30, 2019
Link to GitHub: https://github.com/BalKrishnaDhakal/COMP308-W2019-Assignment2
Link tto Heroku: https://comp308-w2019-assignment2-bal.herokuapp.com/home
Reference: Prof. Tom Tsiliopoulos's Class Demo
*/


/* --- This is code behind file of cotact pages------*/

import { Component, OnInit } from '@angular/core';
import { BasePageComponent } from 'src/app/partials/base-page/base-page.component';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class  ContactComponent extends BasePageComponent implements OnInit {

  constructor(
    route: ActivatedRoute,
    private authService: AuthService
    ) {
    super(route);
  }

  ngOnInit() {
  }
  isLoggedIn(): boolean {
    return this.authService.loggedIn();
  }
}
