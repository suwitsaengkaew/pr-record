import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PrinputComponent } from './prinput/prinput.component';
import { PrviewComponent } from './prview/prview.component';
import { PrinputPreviewComponent } from './prinput/prinput-preview/prinput-preview.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PrinputComponent,
    PrviewComponent,
    PrinputPreviewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
