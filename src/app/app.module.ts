import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PrinputComponent } from './prinput/prinput.component';
import { PrviewComponent } from './prview/prview.component';
import { PrinputPreviewComponent } from './prinput/prinput-preview/prinput-preview.component';
import { PrinputformComponent } from './prinput/prinputform/prinputform.component';

// Service
import { PurchaseOrderService } from './services/pr.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PrinputComponent,
    PrviewComponent,
    PrinputPreviewComponent,
    PrinputformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    PurchaseOrderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
