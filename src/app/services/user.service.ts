import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private userUrl = 'http://localhost:8080/users';

  public getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl);
  }

  public deleteUser(id: number): Observable<User> {
    return this.http.delete<User>(this.userUrl + '/' + id);
  }

  public saveUser(user: any): Observable<User> {
    return this.http.post<User>(this.userUrl, user);
  }
}
