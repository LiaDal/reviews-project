import { AppConfigT, createAppConfig } from "./config/config";
import { DBApp } from "./db/db";

export class ServerApp {
    config: AppConfigT
    db: DBApp
    constructor () {
        this.config = createAppConfig()
        this.db = new DBApp(this.config)
    }

    async init() {
        await this.db.init()
    }
}