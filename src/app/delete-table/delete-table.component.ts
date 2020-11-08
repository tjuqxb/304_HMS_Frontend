import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-delete-table',
  templateUrl: './delete-table.component.html',
  styleUrls: ['./delete-table.component.css']
})
export class DeleteTableComponent implements OnInit {

  cnames = [];
  data = [];
  exist = false;


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  setData(data): void {
    this.exist = true;
    this.data = data;
    this.cnames = Object.keys(data[0]);
  }

  setExist(bool): void {
    this.exist = bool;
  }

  cancelReservation(i, rid): void {
    this.data.splice(i,1);
    this.http.delete(`http://localhost:8080/guest/reservations/${rid}`).toPromise().then(() => {
    }).catch(err => {
    });
  }

}
