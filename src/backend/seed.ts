import { ServerApp } from "./app";

const serverApp = new ServerApp();

serverApp.init().then(async () => {
    let dbUsers = await serverApp.db.users.all();
    console.log('dbUsers before', dbUsers);

    await serverApp.db.users.add({ name: 'some name', email: 'some@email.com' });
    dbUsers = await serverApp.db.users.all();
    console.log('dbUsers after', dbUsers);
}).catch(err => {
    console.error('Error catched', err);
    process.exit(1)
})