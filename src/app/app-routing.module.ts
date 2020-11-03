import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { RegistationComponent } from './registation/registation.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'loginsuccess', component: LoginsuccessComponent },
  { path: 'registation', component: RegistationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
