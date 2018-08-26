import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { DataSource } from '@angular/cdk/table';
import {debounceTime, distinctUntilChanged, startWith, tap, delay} from 'rxjs/operators';
import { Router } from '@angular/router';

import {Member} from '../models/member';
import {MembersService} from '../services/members.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  dataSource: MatTableDataSource<Member>;
  dateFormat = 'dd.MM.yyyy';

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private membersService: MembersService, private router: Router) { }

  ngOnInit() 
  { 
    this.getMembers();
  }
  
  getMembers(): void
  {
  	this.membersService.getMembers()
  		.subscribe(members => 
  			{
  				this.dataSource=new MatTableDataSource(members); 
  				this.dataSource.paginator = this.paginator;
  				this.dataSource.sort = this.sort;
  			}
  		);
  }

  onRowClicked(row) 
  {
    console.log('Row clicked: ', row);
    this.router.navigate(['member-detail/'+row.id]);
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

}
