import firebase from "firebase/app";
import 'firebase/firestore';
import firebaseConfig from "../firebaseConfig";
const config = {
    apiKey:  firebaseConfig.apiKey,
    authDomain: firebaseConfig.authDomain,
    projectId: firebaseConfig.projectId,
    storageBucket: firebaseConfig.storageBucket,
    messagingSenderId: firebaseConfig.messagingSenderId,
    appId: firebaseConfig.appId,
    measurementId: firebaseConfig.measurementId
};

// Initialize Firebase
const app = firebase.initializeApp(config);
// const analytics = getAnalytics(app);
export const getFirestore=()=>{
    return firebase.firestore(app)
}