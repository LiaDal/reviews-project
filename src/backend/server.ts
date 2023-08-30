import { ServerApp } from "./app";

const serverApp = new ServerApp();

serverApp.init().catch(err => {
    console.error('Error catched', err);
    process.exit(1)
})