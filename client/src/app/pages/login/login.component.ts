/*
Student Name: Bal Krishna Dhakal
Student ID: 300916314
Description: COMP308-W2019-Assignment2
Date Created: March 30, 2019
Link to GitHub: https://github.com/BalKrishnaDhakal/COMP308-W2019-Assignment2
Link tto Heroku: https://comp308-w2019-assignment2-bal.herokuapp.com/home
Reference: Prof. Tom Tsiliopoulos's Class Demo
*/
import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;

  constructor(
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.user = new User();
  }
  onLoginSubmit(): void {
    this.authService.authenticateUser(this.user).subscribe(data => {
     if (data.success) {
       this.authService.storeUserData(data.token, data.user);
       this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeOut: 3000});
       this.router.navigate(['/home']);
     } else {
       this.flashMessage.show(data.msg, {cssClass: 'alert-danger', timeOut: 3000});
       this.router.navigate(['/login']);
     }
    });
 }

}
