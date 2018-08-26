import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Member } from '../models/member';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class MembersService 
{
  private membersUrl = 'api/members';

  constructor(private http: HttpClient) { }

  getMembers(): Observable<Member[]> 
  {
    return this.http.get<Member[]>(this.membersUrl)
    	.pipe(
      		catchError(this.handleError('getHeroes', []))
    	);
  }

  private handleError<T> (operation = 'operation', result?: T) 
  {
	return (error: any): Observable<T> => {
	 
	    // TODO: send the error to remote logging infrastructure
	    console.error(error); // log to console instead

	    // Let the app keep running by returning an empty result.
	    return of(result as T);
  	};
  }

  getMember(id: number): Observable<Member> 
  {
    const url = `${this.membersUrl}/${id}`;
    return this.http.get<Member>(url).pipe(
        catchError(this.handleError<Member>(`getMember id=${id}`))
    );
  }

  updateMember (member: Member): Observable<any> {
    return this.http.put(this.membersUrl, member, httpOptions).pipe(
          catchError(this.handleError<any>('updateHero'))
    );
  }	
}
