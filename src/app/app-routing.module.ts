import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { LinkComponent } from './link/link.component';
import { FoodComponent } from './food/food.component';
import { EventComponent } from './event/event.component';
import { VchatComponent } from './vchat/vchat.component';
import { ContactComponent } from './contact/contact.component';
import { LogoutComponent } from './logout/logout.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { TodoComponent } from './todo/todo.component';


const routes: Routes = [
  { path: 'Home', component: HomeComponent},
  { path: 'Event', component: EventComponent},
  {path: 'Login', component: LoginComponent},
  {path: 'Link', component: LinkComponent},
  {path: 'Register', component: RegisterComponent},
  {path: 'Food', component: FoodComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'Vchat', component: VchatComponent}
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
