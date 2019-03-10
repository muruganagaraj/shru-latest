import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { BuyerDetailComponent } from './buyer-detail/buyer-detail.component';
import { AddBuyerComponent } from './add-buyer/add-buyer.component';
import { MatFormFieldModule, MatInputModule, MatSelectModule, MatDatepicker} from '@angular/material';
import { GstDetailComponent } from './gst-detail/gst-detail.component';
import { AddGstComponent } from './add-gst/add-gst.component';
import { ExpenseDetailComponent } from './expense-detail/expense-detail.component';
import { AddExpenseDetailComponent } from './add-expense-detail/add-expense-detail.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule, 
    MatSelectModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  entryComponents: [AddBuyerComponent,AddGstComponent,AddExpenseDetailComponent],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AddBuyerComponent,
    AddGstComponent,
    AddExpenseDetailComponent
  ],
  providers: [{provide: MatDialogRef, useValue: {}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
