import {Component, Input, OnInit, OnDestroy} from '@angular/core';
import {IRepository} from '../../shared/models/IRepository';
import * as moment from 'moment';

@Component({
  selector: 'app-repos-item',
  templateUrl: './repos-item.component.html',
  styleUrls: ['./repos-item.component.scss']
})
export class ReposItemComponent implements OnInit, OnDestroy {

  @Input() item: IRepository;
  moment: any = moment;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    console.log('OnDestroy called');
  }

}
