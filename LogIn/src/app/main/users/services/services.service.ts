import { Injectable } from '@angular/core';
import { dataModel } from '../Mock/dataModel';
import { model } from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor() { }

  private LoggedinUser: model | null = null;

  validateLogin(username: string, password: string) : boolean {
    const user = dataModel.find(u => u.username === username && u.password === password);

    if(user) {
      this.LoggedinUser = user;
      return true;
    }

    return false;
  }

  getLoggedInUser() : model | null {
    return this.LoggedinUser;
  }
}
