import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [ //Component 
    AppComponent, HeaderComponent,
    
  ],
  imports: [ // Packages
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [], // Services
  bootstrap: [AppComponent] // First
})
export class AppModule { }
