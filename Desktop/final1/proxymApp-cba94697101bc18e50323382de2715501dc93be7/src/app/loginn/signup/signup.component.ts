import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 @Input() signupsvg : boolean =true ;
 @Input() signuptop :boolean =true ;
 @Input()signupform : boolean =true ;
@Output() signal = new EventEmitter;
   
    constructor( private loginservice: LoginService) { }

  ngOnInit(): void {
  }
  signup(formGroup : NgForm){
    this.signal.emit ("hi");

  }


  async createuser (myform: {email : string , pass : string}){
 
    await this.loginservice.createUser
    (myform.email, myform.pass)
    this.loginservice.isLoggedin = true ;

   
 }
}
