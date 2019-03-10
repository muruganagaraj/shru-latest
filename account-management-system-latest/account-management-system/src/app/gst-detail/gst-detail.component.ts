import { Component, OnInit } from '@angular/core';
import { AddGstComponent } from 'app/add-gst/add-gst.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { viewmodel } from './gst-detail.viewmodel';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Component({
  selector: 'app-gst-detail',
  templateUrl: './gst-detail.component.html',
  styleUrls: ['./gst-detail.component.css']
})
export class GstDetailComponent implements OnInit {

  animal: string;
  name: string;
  public vm: viewmodel[] = [];



  constructor(public dialog: MatDialog, private http: HttpClient) { }
  ngOnInit() {


    const endpoint = 'https://6d73py636l.execute-api.us-east-1.amazonaws.com/default/EDU_G_GetAll';
    this.getProducts(endpoint);
    this.animal = "Lion";
    this.name = "Shruthi";

  }

  getProducts(endpoint: any): any {
    return this.http.get(endpoint).subscribe(
      data => {
        this.vm = this.getdata(data);
      }
    )
  }


  getdata(data: any): viewmodel[] {
    return (data || []).map((item: any) => <viewmodel>{
      GSTId: item.GSTId,
      GST: item.GST,
      GSTCode: item.GSTCode,
      Description: item.Description
    });


  }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddGstComponent, {
      height: "auto",
      width: "auto"
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  onEdit(item: viewmodel): void {
    const dialogRef = this.dialog.open(AddGstComponent, {
      height: "auto",
      width: "auto",
      data: { item }
    });
  }
  onRemove(item: viewmodel): void {
    alert('we need to remove' + item.GSTCode);
  }
}
