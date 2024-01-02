// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getDatabase , storageBucket} from 'firebase/database';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
  databaseURL: "",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);


const storage = getStorage(app);

export { app, db, storage };


