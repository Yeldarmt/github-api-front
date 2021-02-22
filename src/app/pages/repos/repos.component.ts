import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import * as moment from 'moment';
import {ReposService} from '../../shared/services/repos/repos.service';
import {IRepository} from '../../shared/models/IRepository';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.scss']
})
export class ReposComponent implements OnInit {
  moment: any = moment;
  public userName = '';
  public repositoriesList: IRepository[] = [];
  public langList: string[] = [];
  repoNameCtrl = new FormControl('', [Validators.required]);
  dateCreateCtrl = new FormControl('asc');
  langCtrl = new FormControl('All');
  isModalVisible = false;

  constructor(
    private route: ActivatedRoute,
    private reposService: ReposService,
  ) {
    this.route.params.subscribe(params => this.userName = params.username);
  }

  ngOnInit(): void {
    this.getReposOfUser();
  }

  getReposOfUser() {
    this.reposService.getReposOfUserByUsername(this.userName).subscribe(res => {
      this.repositoriesList = res;
      this.repositoriesList.map((n: IRepository) => {
        if (n.language && !this.langList.includes(n.language)) {
          this.langList.push(n.language);
        }
      });
      }
    );
  }

  createRepo() {
    const data: IRepository = {
      id: this.repositoriesList[0].id + 101010,
      name: this.repoNameCtrl.value,
      language: 'JavaScript',
      owner: this.repositoriesList[0].owner,
      private: false,
      createdAt: moment().format(),
    };
    this.repositoriesList.push(data);
    this.isModalVisible = false;
  }

  public get sortedArray(): IRepository[] {
    let list: IRepository[] = this.repositoriesList;
    if (this.langCtrl.value !== 'All') {
      list = list.filter((n: IRepository) => n.language === this.langCtrl.value);
    }
    return (
      this.dateCreateCtrl.value === 'asc' ?
        (
          list.sort((a: IRepository, b: IRepository) => {
            return <any> new Date(a.createdAt) - <any> new Date(b.createdAt);
          })
        ) :
        (
          list.sort((a: IRepository, b: IRepository) => {
            return <any> new Date(b.createdAt) - <any> new Date(a.createdAt);
          })
        )
    );
  }

  removeRepo(n: IRepository) {
    this.repositoriesList = this.repositoriesList.filter((m: IRepository) => m.id !== n.id);
  }

  openModal() {
    this.isModalVisible = true;
  }

  closeModal() {
    this.isModalVisible = false;
  }
}
