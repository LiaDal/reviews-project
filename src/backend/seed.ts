import { ServerApp } from "./app";

const serverApp = new ServerApp();

serverApp.init().then(async () => {
    let dbUsers = await serverApp.db.users.all();
    console.log('dbUsers before', dbUsers);

    await serverApp.db.users.deleteAll();
    await serverApp.db.users.add({ name: 'some name', email: 'some@email.com' });
    dbUsers = await serverApp.db.users.all();
    console.log('dbUsers after', dbUsers);

    const dbReview = await serverApp.db.reviews.add({
        title: "title",
        content: "constent",
        rating: 0,
        groups: "groups",
        tags: "tags",
        user_id: dbUsers[0].id
    })
    console.log('dbReview', dbReview)
}).catch(err => {
    console.error('Error catched', err);
    process.exit(1)
})