import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule} from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { GuestComponent } from './guest/guest.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReservationGuestComponent } from './reservation-guest/reservation-guest.component';

@NgModule({
  declarations: [
    AppComponent,
    GuestComponent,
    ReservationGuestComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
