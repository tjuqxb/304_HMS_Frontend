import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ReservationGuestComponent} from './reservation-guest/reservation-guest.component';
import {WindowComponent} from './window/window.component';
import {DisplayReservationsComponent} from './display-reservations/display-reservations.component';

const  routes: Routes = [
  {path: 'guests-reserve',
    component: WindowComponent,
  children: [
    {
      path: '',
      component: ReservationGuestComponent
    }
    ]},
  {path: 'management-reservations',
    component: WindowComponent,
    children: [
      {
        path: '',
        component: DisplayReservationsComponent
      }
    ]
  }
];

@NgModule({
  exports: [RouterModule]
})
export class AppRoutingModule { }
