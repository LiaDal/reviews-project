import pgPromise, { IDatabase, IMain } from 'pg-promise';
import { AppConfigT } from "../config/config";
import { IExtensions } from './repos/repos';
import { UsersRepository } from './repos/usersRepo';

type ExtendedProtocol = IDatabase<IExtensions> & IExtensions;

export class DBApp {
    db: ExtendedProtocol
    pgp: IMain
    users: UsersRepository
    constructor (config: AppConfigT) {
        const pgp: IMain = pgPromise();
        this.pgp = pgp;

        const db: ExtendedProtocol = pgp(config.db);
        this.db = db;

        this.users = new UsersRepository(this.db, this.pgp);
    }

    async init() {
        await this.users.create()

        // TODO remove
        await this.users.add()
        console.log('DONE')

        // list all users
    }
}