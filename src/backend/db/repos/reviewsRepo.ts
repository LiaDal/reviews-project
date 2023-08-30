import { IDatabase, IMain } from "pg-promise";
import { reviews } from "../sql/sql";

export class ReviewsRepository {
    constructor(private db: IDatabase<any>, private pgp: IMain) {
        this.db = db
        this.pgp = pgp
    }

    async create(): Promise<void> {
        await this.db.none(reviews.create);
    }

}