import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user/user.model';

// TODO: add the User class typing to the returns and parameters
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>("api/users")
  }

  getById(id): Observable<User> {
    return this.http.get<User>(`api/users/${id}`);
  }

  register(user): Observable<User> {
    return this.http.post<User>('api/users', user);
  }

  update(user): Observable<User> {
    return this.http.put<User>("api/users", user);
  }

  delete(id): Observable<User> {
    return this.http.delete<User>(`api/users/${id}`);
  }

}
