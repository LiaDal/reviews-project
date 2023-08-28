import { ServerApp } from "./app";

const serverApp = new ServerApp();

console.log(serverApp.config);

serverApp.init().catch(err => {
    console.error(err)
    process.exit(1)
})