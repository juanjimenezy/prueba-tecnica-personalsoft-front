import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { LoginComponent } from './login/login.component';
import { Globals } from './globals';
import { LoginService } from './login/login.service';
import { RegisterComponent } from './register/register.component';
import { FormComponent } from './usuarios/form.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UsuariosComponent,
    LoginComponent,
    RegisterComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [Globals,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
