import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AngularFireDatabase } from "@angular/fire/database";
import * as firebase from 'firebase/app'

// declare var $: any;


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit {

 user: Observable<firebase.User>;

//  public User: false;
 constructor(public fAuth: AngularFireAuth, private auth: UserService, public router: Router) {
   this.user = this.fAuth.authState;
 }

 ngOnInit() { }
 signOut() {
   console.log('logged out', this.user);
   alert('user is logout');
   this.fAuth.auth.signOut();
   this.router.navigate(['/vChat']);
 }
}
