import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA5afYAcLVimbwN3wvIkkNXtmhqZgGh6Uo",
    authDomain: "reactsocial-d1fc7.firebaseapp.com",
    databaseURL: "https://reactsocial-d1fc7.firebaseio.com",
    projectId: "reactsocial-d1fc7",
    storageBucket: "reactsocial-d1fc7.appspot.com",
    messagingSenderId: "846619735525",
    appId: "1:846619735525:web:f53d8ea6a7e6405afeab0c",
    measurementId: "G-JL9Z2SQDL4"
}


export const createUserProfileDocment = async (userAuth, additionalData) => {
    //console.log(userAuth);
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();
    console.log(snapShot);

    if(!snapShot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch(error){
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;