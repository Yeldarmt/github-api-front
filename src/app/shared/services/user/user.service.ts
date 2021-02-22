import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {parseRawDataToUser} from '../../parsers/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  getListOfUsersByName(name: string) {
    return this.http.get(`https://api.github.com/search/users?q=${name}`)
      .pipe(map((res: any) => {
        return res.items.slice(0, 20).map(n => parseRawDataToUser(n));
      }));
  }
}
