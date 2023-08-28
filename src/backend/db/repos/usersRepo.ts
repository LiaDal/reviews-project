import { IDatabase, IMain } from "pg-promise";
import { users } from "../sql/sql";

export class UsersRepository {
    constructor(private db: IDatabase<any>, private pgp: IMain) {
        this.db = db
        this.pgp = pgp
    }

    async create(): Promise<void> {
        console.log('users create', users.create);
        await this.db.none(users.create);
        console.log('completed');
        return Promise.resolve()
    }

    async add(): Promise<void> {
        await this.db.oneOrNone(users.add, { name: 'some_name', email: 'some@email.com' })
    }
}