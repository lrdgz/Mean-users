import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User } from './user';

import 'rxjs';
import { Observable } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private _http: Http) { }

  //CREATE USER
  create(user: User) {
    return this._http.post('/api/users', user).pipe(map(data => data.json())).toPromise();
  }

  //DESTROY USER
  destroy(user: User) {
    return this._http.delete('/api/users/' + user._id).pipe(map(data => data.json())).toPromise();
  }

  //UPDATE USER
  update(user: User) {
    return this._http.put('/api/users/' + user._id, user).pipe(map(data => data.json())).toPromise();
  }

  //GET ALL USERS
  getUsers() {
    return this._http.get('/api/users').pipe(map(data => data.json())).toPromise();
  }

  //GET ONE USER
  getUser(user: User) {
    return this._http.get('/api/users/' + user._id).pipe(map(data => data.json())).toPromise();
  }

}
