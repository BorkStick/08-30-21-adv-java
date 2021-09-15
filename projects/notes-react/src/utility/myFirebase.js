//Import firebase!
import { initializeApp } from 'firebase/app';
import { getDatabase, ref } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDsq8h0D7a8ERQ7Jwu4KpesbdyoG553bPU",
    authDomain: "tts-project-eb075.firebaseapp.com",
    databaseURL: "https://tts-project-eb075-default-rtdb.firebaseio.com",
    projectId: "tts-project-eb075",
    storageBucket: "tts-project-eb075.appspot.com",
    messagingSenderId: "727751698875",
    appId: "1:727751698875:web:68d96df1162a8c88dd3c9e",
    measurementId: "G-NQQQJTMQRE"
  };





initializeApp(firebaseConfig);

function getFirebaseRef(refPath) {
    return ref(getDatabase(), refPath);
  }
  
  export default {
    getFirebaseRef: getFirebaseRef
  };