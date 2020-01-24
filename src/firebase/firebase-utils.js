import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD6bTx-Z_AJKQNaWnl0G3n6XcGfvnIJfmI",
    authDomain: "crwn-db-cd5de.firebaseapp.com",
    databaseURL: "https://crwn-db-cd5de.firebaseio.com",
    projectId: "crwn-db-cd5de",
    storageBucket: "crwn-db-cd5de.appspot.com",
    messagingSenderId: "355909052473",
    appId: "1:355909052473:web:6d9619f1d0babd2457c5e8",
    measurementId: "G-PD5XJFZL3R"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account"});

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}/`);
    const snapshot = await userRef.get();

    if (!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                createdAt,
                displayName,
                email,
                ...additionalData
            });
        } catch (error) {
            console.log("error creating user", error.message)
        }
    }
    return userRef;
};

//function for export collections to firebase
// export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
//     const collectionRef = firestore.collection(collectionKey);
//     const batch = firestore.batch();
//
//     objectsToAdd.forEach(obj => {
//         const newDocRef = collectionRef.doc();
//         batch.set(newDocRef, obj);
//     });
//     return await batch.commit();
// };

export const convertCollectionsSnapshotToMap = collections => {
    const transformedCollection = collections.docs.map(doc => {
        const { title, items } = doc.data();
        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    });
    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {});
};

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            resolve(userAuth);
        }, reject);
    });
};

export default firebase;