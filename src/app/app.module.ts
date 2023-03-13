import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { MyComponentComponent } from './my-component/my-component.component';
import { BindingPropertyComponent } from './binding-property/binding-property.component';
import { BindingClassComponent } from './binding-class/binding-class.component';
import { BindingStyleComponent } from './binding-style/binding-style.component';
import { BindingEventComponent } from './binding-event/binding-event.component';
import { Binding2wayComponent } from './binding2way/binding2way.component';
import { PTBHComponent } from './ptbh/ptbh.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { FormBuilder, FormsModule, FormGroup } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,

    MyComponentComponent,
    BindingPropertyComponent,
    BindingClassComponent,
    BindingStyleComponent,
    BindingEventComponent,
    Binding2wayComponent,
    PTBHComponent,
    LoginScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FormBuilder,
    FormGroup,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
