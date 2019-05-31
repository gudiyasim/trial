import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireList } from '@angular/fire/database';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  constructor(private database: AngularFireDatabase) { }

  ngOnInit() {
  }

  loginUser() {
    if (this.username === 'Admin' && this.password === 'admin123') {
      console.log('welcome');
      // document.getElementById('myInput').value = '';
    }

  }
}
