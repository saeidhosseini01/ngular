import { Injectable } from '@angular/core';
import { IUser } from './user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})






export class UserserviceService {

  constructor(private http:HttpClient ) { }
  public getAllUser() :Observable<IUser[]>
  {
    alert("service")
    return this.http.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
  }
  public getuserById(userid:number):Observable<IUser>{
    return this.http.get<IUser>('https://jsonplaceholder.typicode.com/users');
  }
}
