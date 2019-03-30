/*
Student Name: Bal Krishna Dhakal
Student ID: 300916314
Description: COMP308-W2019-Assignment2
Date Created: March 30, 2019
Link to GitHub: https://github.com/BalKrishnaDhakal/COMP308-W2019-Assignment2
Link tto Heroku: https://comp308-w2019-assignment2-bal.herokuapp.com/home
Reference: Prof. Tom Tsiliopoulos's Class Demo
*/


/* --- This is code behind file of register pages------*/

import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

import { User } from 'src/app/models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User;

  constructor(
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.user = new User();
  }
  onRegisterSubmit(): void {
    this.authService.registerUser(this.user).subscribe(data => {
      if (data.success) {
        this.flashMessage.show('You are now registered and may log in', {cssClass: 'alert-success', timeOut: 3000});
        this.router.navigate(['/login']);
      } else {
        this.flashMessage.show('A registration Error Occurred', {cssClass: 'alert-danger', timeOut: 3000});
        this.router.navigate(['/register']);
      }
    });
  }

}
