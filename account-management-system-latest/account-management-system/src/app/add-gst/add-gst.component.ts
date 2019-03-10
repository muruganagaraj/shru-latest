import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'app/buyer-detail/buyer-detail.component';
import { viewmodel } from './add-gst.viewmodel';



@Component({
  selector: 'app-add-gst',
  templateUrl: './add-gst.component.html',
  styleUrls: ['./add-gst.component.scss']
})
export class AddGstComponent implements OnInit {
  public vm: viewmodel = {};
  constructor(
    public dialogRef: MatDialogRef<AddGstComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
    if (this.dialogRef.componentInstance.data) {
      this.vm = this.convertVotoVM(this.dialogRef.componentInstance.data);
    } else {
      this.vm = {};
    }

  }
  onClick(): void {
    let data: viewmodel = this.vm;
    if (this.vm.Description || this.vm.GSTCode || this.vm.GST) {
      alert('valid model, need to make api call');
    } else {
      alert('model not valid');
    }
    if (this.vm.GSTId) {

    } else {

    }
    this.dialogRef.close();
  }
  convertVotoVM(data: any): viewmodel {
    let modaldata: viewmodel = {};
    modaldata.GST = data.item.GST;
    modaldata.GSTCode = data.item.GSTCode;
    modaldata.Description = data.item.Description;
    modaldata.GSTId = data.item.GSTId
    return modaldata;
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }
}
