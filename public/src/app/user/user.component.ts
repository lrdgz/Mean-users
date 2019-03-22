import { Component, OnInit } from '@angular/core';

import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[] = [
    // new User(1, 'luis', 'rodriguez', 'dev@dev.com'),
    // new User(2, 'luis', 'rodriguez', 'dev@dev.com'),
    // new User(3, 'luis', 'rodriguez', 'dev@dev.com'),
    // new User(4, 'luis', 'rodriguez', 'dev@dev.com'),
    // new User(5, 'luis', 'rodriguez', 'dev@dev.com'),
  ];

  constructor(private _userService: UserService) { }

  //EJECUTA METODOS DESDE QUE EL COMPONENTE INICIA
  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this._userService.getUsers()
      .then(users => this.users = users);
  }

  create(user: User) {
    // this.users.push(user);
    console.log("user", user);
    this._userService.create(user)
      .then(status => this.getUsers())
      .catch(err => console.error(err));
  }

  destroy(user: User) {
    // const index = this.users.indexOf(user);
    // this.users.splice(index, 1);
    this._userService.destroy(user)
      .then((result) => {
        this.getUsers();
      }).catch((err) => {
        console.error(err);
      });
  }

  update(user) {
    // console.log(user);
    // const index = this.users.indexOf(user.original);
    // this.users[index] = user.edited;
    this._userService.update(user)
      .then((result) => {
        this.getUsers();
      }).catch((err) => {
        console.error(err);
      });
  }

}
