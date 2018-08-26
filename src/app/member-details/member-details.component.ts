import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import {Member} from '../models/member';
import { MembersService }  from '../services/members.service';

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.css']
})


export class MemberDetailsComponent implements OnInit 
{

  member: Member;

  constructor(private route: ActivatedRoute,
    private memeberService: MembersService,
    private location: Location) { }

  ngOnInit() 
  {
  	this.getMember();
  }

  getMember(): void 
  {
    const id = +this.route.snapshot.paramMap.get('id');
    this.memeberService.getMember(id)
      .subscribe(member => this.member = member);
  }

  save(): void
  {
    this.memeberService.updateMember(this.member)
      .subscribe(() => this.location.back());
  }

  cancel(): void
  {
    this.location.back();
  }


}
