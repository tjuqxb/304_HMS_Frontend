import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-dialog-a',
  templateUrl: './dialog-a.component.html',
  styleUrls: ['./dialog-a.component.css']
})
export class DialogAComponent implements OnInit {
  receptionistVal = new FormControl('', [
    Validators.required,
  ]);
  public checkOption;
  public options = [ 'check in', 'check out', 'delete check-out record', 'clear all check in/out records'];
  constructor(@Inject(MAT_DIALOG_DATA) public data, public dialogRef: MatDialogRef<DialogAComponent>) { }

  ngOnInit(): void {
    console.log(this.data);
  }

  submit(): void {
    if (this.data.month.length < 2) {
      this.data.month = '0' + this.data.month;
    }
    let day = this.data.item.index + this.data.innerIndex + 1;
    if (day.length < 2) {
      day = '0' + day;
    }
    let date = [this.data.year, this.data.month, day].join('-');
    this.dialogRef.close({purpose: this.options[this.checkOption],
    data:{
      guest_id: this.data.item.reservation_guest.guest_id,
      rm_number: this.data.rm_number,
      date,
      receptionist: this.data.receptionists[this.receptionistVal.value].sid,
    }});
  }

}
