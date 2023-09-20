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

  async create(): Promise<null> {
    return await this.db.none(users.create)
  }

  async add(user: IUser): Promise<DbUser> {
    return await this.db.one(users.add, user)
  }

  async all(): Promise<DbUser[]> {
    return await this.db.any(users.all)
  }

  async deleteAll(): Promise<DbUser[]> {
    return await this.db.any(users.deleteAll)
  }

  async findByEmail(email: IUser['email']): Promise<DbUser | null> {
    return await this.db.oneOrNone(users.findByEmail, { email })
  }
}
