import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/models/user/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // TODO: Change the user class used / or change the class 
  private _currenUserSubject: BehaviorSubject<User>;

  constructor(private http: HttpClient) { 
      this._currenUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
  }

  getCurrentUser(){
    return this._currenUserSubject.value;
  }

  login(user: User){
    let password = user.password;
    let username = user.username;
    // TODO: update request path 
    return this.http.post<any>("" , { password, username })
      .pipe(
        map(user => {
          if(user && user.token){
            localStorage.setItem('currentUser' , JSON.stringify(user));
            this._currenUserSubject.next(user);
          }
          return user;
        })
      )
  }

  logout(){
    localStorage.removeItem('currentUser');
    this._currenUserSubject.next(null);
  }

}
