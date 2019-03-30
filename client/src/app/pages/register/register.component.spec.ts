/*
Student Name: Bal Krishna Dhakal
Student ID: 300916314
Description: COMP308-W2019-Assignment2
Date Created: March 30, 2019
Link to GitHub: https://github.com/BalKrishnaDhakal/COMP308-W2019-Assignment2
Link tto Heroku: https://comp308-w2019-assignment2-bal.herokuapp.com/home
Reference: Prof. Tom Tsiliopoulos's Class Demo
*/
/* This is code behind file for register component */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
