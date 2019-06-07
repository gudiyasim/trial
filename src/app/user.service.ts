import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import * as firebase from "firebase/app";
import { Observable } from "rxjs";

import { auth } from 'firebase/app';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: "root"
})
export class UserService {
  user: Observable<firebase.User>;

  constructor(private fireAuth: AngularFireAuth) {
    // alert("user.servive.ts(1): " + this.user);
    this.user = fireAuth.authState;
  }

  signUp(email: string, password: string) {
    this.fireAuth.auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        alert(value);
        console.log(value);

        return value;
      })
      .catch(err => {
        console.log(err);
        alert("user error");
        return err;
      });
  }

  login(email: string, password: string) {
    this.fireAuth.auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        alert("login");
      })
      .catch(err => {
        console.log(err);
      });
  }

  signOut() {
    this.fireAuth.auth.signOut();
  }
}
