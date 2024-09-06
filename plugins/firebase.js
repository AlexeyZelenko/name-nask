import { initializeApp, getApps, getApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBc7u10MhozydZgZBd7NxcE6eD30HryL_U',
  authDomain: 'nusk-9e136.firebaseapp.com',
  projectId: 'nusk-9e136',
  storageBucket: 'nusk-9e136.appspot.com',
  messagingSenderId: '364628197447',
  appId: '1:364628197447:web:a945a1b2198600ec81f162'
}
getApps().length === 0 ? initializeApp(firebaseConfig) : getApp()
let firebaseApp
try {
  firebaseApp = getApp()
} catch (e) {
  firebaseApp = initializeApp(firebaseConfig)
}
const db = getFirestore(firebaseApp)
export { db }
