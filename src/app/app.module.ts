import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './public/pages/log-in/log-in.component';
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatIconModule} from "@angular/material/icon";
import { SingInComponent } from './public/pages/sing-in/sing-in.component';
import {HttpClientModule} from "@angular/common/http";
import {MatListModule} from "@angular/material/list";
import {MatCardModule} from "@angular/material/card";
import { InvoiceListComponent } from './invoices/components/invoice-list/invoice-list.component';
import { SideNavegationBarComponent } from './public/pages/side-navegation-bar/side-navegation-bar.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";




@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    SingInComponent,
    InvoiceListComponent,
    SideNavegationBarComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatIconModule,
    HttpClientModule,
    MatListModule,
    MatCardModule,
    MatSidenavModule,
    MatToolbarModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
