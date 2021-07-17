import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Compte } from '../compte/compte.module';
import { AngularFireAuth } from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  comptes : Compte []=[]
  isLoggedin: boolean=false;

  constructor( public firebaseAuth : AngularFireAuth) { }


  async signin(email : string , pass : string){

  await  this.firebaseAuth.signInWithEmailAndPassword(email,pass)
  .then (res => {
    this.isLoggedin= true ;
    localStorage.setItem('user', JSON.stringify(res.user));
    console.log (localStorage.getItem('user'));
  })
}

async createUser(email : string , pass : string){
      await  this.firebaseAuth.createUserWithEmailAndPassword(email,pass)
      .then (res => {
        localStorage.setItem('user', JSON.stringify(res.user));
        console.log (localStorage.getItem('user'));
      })
    }

    logout(){
      this.firebaseAuth.signOut();
      localStorage.removeItem('user');
    }


}