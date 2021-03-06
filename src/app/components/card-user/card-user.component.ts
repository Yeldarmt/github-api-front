import {Component, Input, OnInit} from '@angular/core';
import {IUser} from '../../shared/models/IUser';

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.scss']
})
export class CardUserComponent implements OnInit {
  @Input() user: IUser;

  constructor() { }

  ngOnInit(): void {
  }

}
