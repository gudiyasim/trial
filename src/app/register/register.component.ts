import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email: string;
  password: string;
  invalidForm: boolean;
  constructor(private fAuth: AngularFireAuth, public router: Router) { }

  ngOnInit() {
 }

  register() {
    this.fAuth.auth.createUserWithEmailAndPassword(this.email, this.password)
    .then(value => {
      this.router.navigate(['/Home']);
    })
    .catch( err => {
      this.invalidForm = false;
    });
  }

}
