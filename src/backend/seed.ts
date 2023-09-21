import { ServerApp } from './app'

const serverApp = new ServerApp()

serverApp
  .init()
  .then(async () => {
    await serverApp.db.clean()
    await serverApp.db.users.add({ name: 'some name', email: 'some@email.com', password_hash: '' })
    await serverApp.db.users.add({ name: 'test name', email: 'test@email.com', password_hash: '' })
    const dbUsers = await serverApp.db.users.all()
    console.log('Users created len=', dbUsers.length)

    await serverApp.db.reviews.add({
      title: 'Book review',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      rating: 8,
      groups: 'books',
      tags: 'book',
      user_id: dbUsers[0].id,
    })

    await serverApp.db.reviews.add({
      title: 'Book review',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      rating: 9,
      groups: 'books',
      tags: 'book',
      user_id: dbUsers[0].id,
    })
    await serverApp.db.reviews.add({
      title: 'Movie review',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      rating: 6,
      groups: 'movies',
      tags: 'movie',
      user_id: dbUsers[0].id,
    })

    await serverApp.destroy()
  })
  .catch((err) => {
    console.error('Error catched', err)
    process.exit(1)
  })
