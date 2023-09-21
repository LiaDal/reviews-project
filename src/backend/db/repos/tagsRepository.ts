import { IDatabase, IMain } from 'pg-promise'
import { tags } from '../sql/sql'
import { DbReview, ITags } from '../models/tags'

export class TagsRepository {
  constructor(
    private db: IDatabase<any>,
    private pgp: IMain,
  ) {
    this.db = db
    this.pgp = pgp
  }

  async create(): Promise<null> {
    return await this.db.none(tags.create)
  }

  async add(tag: ITags): Promise<DbReview> {
    return await this.db.one(tags.add, tag)
  }
}
