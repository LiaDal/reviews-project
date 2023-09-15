import pgPromise, { IDatabase, IMain } from 'pg-promise'
import { AppConfigT } from '../config/config'
import { IExtensions } from './repos/repos'
import { UsersRepository } from './repos/usersRepo'
import { ReviewsRepository } from './repos/reviewsRepo'

type ExtendedProtocol = IDatabase<IExtensions> & IExtensions

export class DBApp {
  db: ExtendedProtocol
  pgp: IMain
  users: UsersRepository
  reviews: ReviewsRepository
  constructor(config: AppConfigT) {
    const pgp: IMain = pgPromise()
    this.pgp = pgp

    const db: ExtendedProtocol = pgp(config.db)
    this.db = db

    this.users = new UsersRepository(this.db, this.pgp)

    this.reviews = new ReviewsRepository(this.db, this.pgp)
  }

  async init() {
    await this.users.create()
    await this.reviews.create()
  }

  async clean() {
    await this.reviews.deleteAll()
    await this.users.deleteAll()
  }

  async destroy(): Promise<void> {
    await this.db.$pool.end()
  }
}
