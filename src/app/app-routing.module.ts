import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormComponent } from './usuarios/form.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full'},
  { path: 'Login', component: LoginComponent},
  { path: 'Register', component: RegisterComponent},
  { path: 'Usuarios', component: UsuariosComponent},
  { path: 'Usuarios/form/:id', component: FormComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
