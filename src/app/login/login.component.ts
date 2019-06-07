import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  invalidForm: boolean;

  constructor(public fAuth: AngularFireAuth, public router: Router) {}

  ngOnInit() {}

      login() {
        this.fAuth.auth.signInWithEmailAndPassword(this.email, this.password)
          .then(value => {
            this.router.navigate(['/Vchat']);
            console.log('loged in', value)



          })

      .catch(err => {
        alert('Mansi: invalid form');
        this.invalidForm = true;
      });
  }
}

// import { Component, OnInit } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { NgForm } from '@angular/forms';
// import { AngularFireDatabase } from '@angular/fire/database';
// import { AngularFireAuth } from '@angular/fire/auth';
// import { AngularFireList } from '@angular/fire/database';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {
//   username: string = 'admin';
//   password: string = 'admin123';
//   constructor(private database: AngularFireDatabase) { }

//   ngOnInit() {
//   }

//   loginUser() {
//     if (this.username == 'admin' && this.password == 'admin123') {
//       //console.log('welcome');
//       var user = document.getElementById('InUser').value ;
//       var pass = document.getElementById('InPass').value ;
//       alert('U'+ " - " + user + ' , Pass - '+ pass);
//     }

//   }
// }
