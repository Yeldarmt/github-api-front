import {IUser} from './IUser';

export interface IRepository {
  id: number;
  name: string;
  language: string;
  private: boolean;
  owner: IUser;
  createdAt: string;
}
