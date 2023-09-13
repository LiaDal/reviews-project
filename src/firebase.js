import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyC9R-ErEXmTjx2ILW69wPxPPd5qLR8MPTQ',
  authDomain: 'rewiews-app.firebaseapp.com',
  projectId: 'rewiews-app',
  storageBucket: 'rewiews-app.appspot.com',
  messagingSenderId: '385647395742',
  appId: '',
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export default app
