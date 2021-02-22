import {IRepository} from '../models/IRepository';
import {parseRawDataToUser} from './user';

export const parseRawDataToRepository = (rawRepos: any): IRepository => ({
  id: rawRepos.id,
  name: rawRepos.name,
  language: rawRepos.language,
  private: rawRepos.private,
  createdAt: rawRepos.created_at,
  owner: parseRawDataToUser(rawRepos.owner),
});
