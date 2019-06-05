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
import { SupportComponent } from './support/support.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'Home', component: HomeComponent},
  {path: 'Login', component: LoginComponent},
  {path: 'Link', component: LinkComponent},
  {path: 'Contact', component: ContactComponent},
  {path: 'Logout', component: LogoutComponent},
  {path: 'Support', component: SupportComponent},
  {path: 'Vchat', component: VchatComponent},
  {path: 'food', component: FoodComponent},
  {path: 'event', component: EventComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
