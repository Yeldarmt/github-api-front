import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {IUser} from '../../shared/models/IUser';

@Component({
  selector: 'app-group-card-user',
  templateUrl: './group-card-user.component.html',
  styleUrls: ['./group-card-user.component.scss']
})
export class GroupCardUserComponent implements OnInit, OnChanges {
  @Input() usersList: IUser[];
  @Input() input: string;
  @Input() isSearchClicked: boolean;
  showError = true;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.isSearchClicked) {
      if (changes.input.currentValue !== changes.input.previousValue) {
        if (this.usersList.length < 1) { this.showError = false; }
      }
    }
  }

}
