import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {UserService} from '../../shared/services/user/user.service';
import {IUser} from '../../shared/models/IUser';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  usernameCtrl = new FormControl('', [Validators.required]);
  usersList: IUser[] = [];
  isSearchClicked = false;

  constructor(private userService: UserService) {
    this.usernameCtrl.valueChanges.subscribe((value) => {
      if (value.length < 1) {
        this.usersList = [];
        this.isSearchClicked = false;
      }
    });
  }

  ngOnInit(): void {
  }

  onSearchClick() {
    if (this.usernameCtrl.value.length > 0) {
      console.log('username', this.usernameCtrl.value);
      this.userService.getListOfUsersByName(this.usernameCtrl.value).subscribe(val => {
        this.usersList = val;
        this.isSearchClicked = true;
        console.log('users', this.usersList);
      });
    }
  }

}
