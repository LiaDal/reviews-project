import { AppConfigT, createAppConfig } from "./config/config";
import { DBApp } from "./db/db";
import { WebApp } from "./web/web";


export class ServerApp {
    config: AppConfigT
    db: DBApp
    web: WebApp
    constructor () {
        this.config = createAppConfig()
        this.db = new DBApp(this.config)
        this.web = new WebApp(this.config, this.db)
    }

    async init() {
        await this.db.init()
        await this.web.init()
    }
}