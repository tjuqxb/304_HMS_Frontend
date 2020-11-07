import {Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {GuestComponent} from '../guest/guest.component';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-reservation-guest',
  templateUrl: './reservation-guest.component.html',
  styleUrls: ['./reservation-guest.component.css']
})
export class ReservationGuestComponent implements OnInit {
  @ViewChildren(GuestComponent)
  private guests: QueryList<GuestComponent>;

  public form: FormGroup;
  public record: any;
  public minDate: Date = new Date();
  public listAdd = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.form = new FormGroup( {
      $key: new FormControl(null),
      name: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      creditCard: new FormControl('', [Validators.required]),
      photoID: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email]),
      inDate: new FormControl('', [Validators.required]),
      outDate: new FormControl('', [Validators.required]),
    });
    this.record = {};
  }

  submitRecord(): any {
    if (this.form.valid) {
      this.record.name = this.form.get('name').value;
      this.record.phone = this.form.get('phone').value;
      this.record.credit_card = this.form.get('creditCard').value;
      this.record.photo_identity = this.form.get('photoID').value;
      this.record.email = this.form.get('email').value;
      this.record.membership = null;
      let date = {inDate: {}, outDate: {}};
      date.inDate = this.formatDate(this.form.get('inDate').value);
      date.outDate = this.formatDate(this.form.get('outDate').value);
      let recordData = [];
      this.guests.forEach(ele => {
        //console.log(ele.exist);
        if(ele.exist) {
          const singleData = ele.submitRecord();
          if (singleData) {
            recordData.push(singleData);
          }
        }
      });
      let ret = {reservationGuest: {}, inHouseGuests: [], date: {}};
      ret.reservationGuest = this.record;
      ret.inHouseGuests = recordData;
      ret.date = date;
      console.log(ret);
      this.http.post('http://localhost:8080/guest/reservation_guest', ret).toPromise().then((data) => {
        console.log(data);
      }).catch((err) => {

      });
    }
  }

  addGuest(): any {
      this.listAdd.push(1);
  }

  formatDate(date: any):String {
      let d = new Date(date);
      let month = '' + (d.getMonth() + 1);
      console.log(d.getMonth());
      let day = '' + d.getDate();
      let year = d.getFullYear();
      if (month.length < 2) {
      month = '0' + month;
      }
      if (day.length < 2) {
      day = '0' + day;
      }
      return [year, month, day].join('-');
  }



}
