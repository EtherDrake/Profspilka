import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MembersComponent } from './members/members.component';
import { MemberDetailsComponent } from './member-details/member-details.component';

const routes: Routes = [
	{ path: 'members', component: MembersComponent },
	{ path: 'member-detail/:id', component: MemberDetailsComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule 
{ 
	
}
