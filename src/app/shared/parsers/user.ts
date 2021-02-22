import {IUser} from '../models/IUser';

export const parseRawDataToUser = (rawUser: any): IUser => ({
  id: rawUser.id,
  name: rawUser.login,
  avatarUrl: rawUser.avatar_url,
});
