import { AppConfigT, createAppConfig } from "./config/config";

export class ServerApp {
    config: AppConfigT
    constructor () {
        this.config = createAppConfig()
    }

    initDB() {
        // init pg promise

        // SQL => create table users if not exists

        // SQL => list all user
    }
}