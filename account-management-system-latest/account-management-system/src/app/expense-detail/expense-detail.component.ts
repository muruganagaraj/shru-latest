import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AddExpenseDetailComponent } from 'app/add-expense-detail/add-expense-detail.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExpenseDetail } from 'model/expenseModel';

@Component({
  selector: 'app-expense-detail',
  templateUrl: './expense-detail.component.html',
  styleUrls: ['./expense-detail.component.scss']
})
export class ExpenseDetailComponent implements OnInit {
  expenseForm: FormGroup;
  animal: string;
  name: string;
  isGSTRequired: boolean;

  constructor(public dialog: MatDialog, private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.animal = "Lion";
    this.name = "Shruthi";
    this.isGSTRequired = false;
    this.expenseForm = this.formBuilder.group({
      BuyerId: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    })
  }

  openDialog(): void {
    debugger;
    const dialogRef = this.dialog.open(AddExpenseDetailComponent, {
      height: "auto",
      width: "auto",
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  onSubmit() {
    if (this.expenseForm.invalid) {
      return;
    }
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.expenseForm.value))
  }
}
