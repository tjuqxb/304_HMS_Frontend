import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ReservationGuestComponent} from './reservation-guest/reservation-guest.component';
import {WindowComponent} from './window/window.component';
import {DisplayReservationsComponent} from './display-reservations/display-reservations.component';
import {Window2Component} from './window2/window2.component';

const  routes: Routes = [
  {path: 'guests-reserve',
    component: WindowComponent
  },
  {path: 'management',
    component: Window2Component
  },
  {
    path: '',
    redirectTo: 'guests-reserve',
    pathMatch: 'full'
  }
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
})

export class AppRoutingModule { }
