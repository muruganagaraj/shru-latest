import { Component, OnInit, Inject } from '@angular/core';
import { DialogData } from 'app/buyer-detail/buyer-detail.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-add-expense-detail',
  templateUrl: './add-expense-detail.component.html',
  styleUrls: ['./add-expense-detail.component.scss']
})
export class AddExpenseDetailComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddExpenseDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
