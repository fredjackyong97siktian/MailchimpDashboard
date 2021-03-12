
export const firebaseConnection = () => {

    const firebase = require('firebase-admin');
    //firebase
    var admin = firebase.initializeApp({
        credential: firebase.credential.applicationDefault(),
        databaseURL: 'https://bsupkit-45126.firebaseio.com'
    });

    const db = admin.firestore();

    return db;
}