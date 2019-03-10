import { Component, OnInit } from '@angular/core';
import { AddBuyerComponent } from 'app/add-buyer/add-buyer.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-buyer-detail',
  templateUrl: './buyer-detail.component.html',
  styleUrls: ['./buyer-detail.component.css']
})
export class BuyerDetailComponent implements OnInit {

  animal: string;
  name: string;

  constructor(public dialog: MatDialog) { }
  ngOnInit() {
    this.animal = "Lion";
    this.name = "Shruthi";
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddBuyerComponent, {
      height: "auto",
      width: "auto",
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}
