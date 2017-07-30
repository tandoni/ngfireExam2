import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { Router } from "@angular/router";
import * as firebase from 'firebase';

@Component({
  selector: 'app-phone-auth',
  templateUrl: './phone-auth.component.html',
  styleUrls: ['./phone-auth.component.scss']
})
export class PhoneAuthComponent implements OnInit {

  phoneNumber: string;
  code: string;
  recaptchaVerifier: firebase.auth.RecaptchaVerifier;

  confirmationResult: any;
  user: firebase.User;

  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  ngOnInit() {
    this.phoneNumber = "+1";
    this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha');
    this.recaptchaVerifier.render();

    this.afAuth.authState.subscribe((user) => { 
      this.user = user;
     });
  }


  signInWithPhoneNumber() {
    this.afAuth.auth.signInWithPhoneNumber(this.phoneNumber, this.recaptchaVerifier)
      .then((conf) => {
        this.confirmationResult = conf;
        console.log(conf);
      }).catch(function (n) {
        console.error("SMS not sent!!!")
      })
  }

  signInWithCode() {
    this.confirmationResult.confirm(this.code).then((res) => {
      this.user = res.user;
    }).catch((err) => {
      console.log("Failed to sign in...");
    });
  }

  signOut() {
    this.afAuth.auth.signOut();
    console.log('signed out');
  }

}
