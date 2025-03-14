import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgencyService {
  agencyRoster: any[] = []; 

  constructor(private http: HttpClient) {}
  
    ngOnInit(): void {
      
      const x = this.getRosterFromAPI();
      console.log(`from service: \n${JSON.stringify(x)}`);
    }
  

  
getRosterFromAPI(): Observable<any> {
  return this.http.get(`http://localhost:8080/api/agency/1/members/all`).pipe(catchError(this.handleError));
  }
  
  
    handleError(error: HttpErrorResponse) {
      let msg = '';
      if (error.error instanceof ErrorEvent) {
        // client-side error
        msg = error.error.message;
      } else {
        // server-side error
        msg = `Error Code: ${error.status}Message: ${error.message}`;
      }
      return msg;
    }
}
