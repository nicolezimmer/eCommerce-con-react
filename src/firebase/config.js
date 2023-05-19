import firebase from "firebase/app";
import 'firebase/firestore';
const firebaseConfig = {

};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const getFirestore=()=>{
    return firebase.firestore(app)
}