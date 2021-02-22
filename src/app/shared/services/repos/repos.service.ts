import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {parseRawDataToRepository} from '../../parsers/repository';

@Injectable({
  providedIn: 'root'
})
export class ReposService {

  constructor(
    private http: HttpClient
  ) { }

  getReposOfUserByUsername(name: string) {
    return this.http.get(`https://api.github.com/users/${name}/repos`)
      .pipe(map((res: any) => {
        return res.map(n => parseRawDataToRepository(n));
      }));
  }
}
