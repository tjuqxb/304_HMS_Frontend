import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule} from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { GuestComponent } from './guest/guest.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReservationGuestComponent } from './reservation-guest/reservation-guest.component';
import { TableComponent } from './table/table.component';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { DeleteTableComponent } from './delete-table/delete-table.component';
import { WindowComponent } from './window/window.component';
import { AppRoutingModule } from './app-routing.module';
import { DisplayReservationsComponent } from './display-reservations/display-reservations.component';
import { Window2Component } from './window2/window2.component';
import { RoomGridComponent } from './room-grid/room-grid.component';
import {MatRippleModule} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import { DialogAComponent } from './dialog-a/dialog-a.component';
import {MatDialogModule} from '@angular/material/dialog';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GuestComponent,
    ReservationGuestComponent,
    TableComponent,
    DeleteTableComponent,
    WindowComponent,
    DisplayReservationsComponent,
    Window2Component,
    RoomGridComponent,
    DialogAComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatCheckboxModule,
    AppRoutingModule,
    MatRippleModule,
    MatRadioModule,
    MatDialogModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
