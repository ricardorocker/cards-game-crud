
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultLayoutComponent } from './components/default-layout/default-layout.component';
import { HomeComponent } from './views/home/home.component';
import { RegisterCardComponent } from './views/register-card/register-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DefaultLayoutComponent,
    RegisterCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
