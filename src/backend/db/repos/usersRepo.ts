import { IDatabase, IMain } from 'pg-promise'
import { users } from '../sql/sql'
import { DbUser, IUser } from '../models/users'

export class UsersRepository {
  constructor(
    private db: IDatabase<any>,
    private pgp: IMain,
  ) {
    this.db = db
    this.pgp = pgp
  }

  async create(): Promise<void> {
    await this.db.none(users.create)
  }

  async add(user: IUser): Promise<void> {
    await this.db.oneOrNone(users.add, user)
  }

  async all(): Promise<DbUser[]> {
    return await this.db.any(users.all)
  }

  async deleteAll(): Promise<DbUser[]> {
    return await this.db.any(users.deleteAll)
  }
}
