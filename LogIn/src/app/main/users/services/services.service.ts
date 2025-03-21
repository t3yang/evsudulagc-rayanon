import { Injectable } from '@angular/core';
import { dataModel } from '../Mock/dataModel';
import { model } from '../model/model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {


  constructor(private http: HttpClient) { }

  public userLogin(user: any): Observable<any> {
    return this.http.post('http://localhost:8000/getuser', user)
  }

  // constructor() { }

  // private LoggedinUser: model | null = null;

  // validateLogin(username: string, password: string) : boolean {
  //   const user = dataModel.find(u => u.username === username && u.password === password);

  //   if(user) {
  //     this.LoggedinUser = user;
  //     return true;
  //   }

  //   return false;
  // }

  // getLoggedInUser() : model | null {
  //   return this.LoggedinUser;
  // }
}
