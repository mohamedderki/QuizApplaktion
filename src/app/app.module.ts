import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WahlmenuComponent } from './Zweiwahlmenu/wahlmenu.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';
import { RigesterComponent } from './rigester/rigester.component';
import { DreiwahlmenuComponent } from './dreiwahlmenu/dreiwahlmenu.component';

import {LernmudosModule } from './lernmudos/lernmudos.module';
import { PrufungsmoudosModule } from './prufungsmoudos/prufungsmoudos.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WahlmenuComponent,
    ContactUsComponent,
    LoginComponent,
    RigesterComponent,
    DreiwahlmenuComponent,

  ],
  imports: [
    BrowserModule,
    LernmudosModule,
    PrufungsmoudosModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
