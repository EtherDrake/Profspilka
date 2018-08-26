import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule,MatPaginatorModule, 
		MatTableModule, MatSortModule, 
		MatProgressSpinnerModule} from '@angular/material';
import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MembersComponent } from './members/members.component';
import { AppRoutingModule } from './/app-routing.module';
import { MemberDetailsComponent } from './member-details/member-details.component';


@NgModule({
  declarations: [
    AppComponent,
    MembersComponent,
    MemberDetailsComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }),
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
