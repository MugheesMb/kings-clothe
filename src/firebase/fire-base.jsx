import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {


    apiKey: "AIzaSyA0wWsoRX0tfm4k0SGqZ0QYKa9hStDgWko",
    authDomain: "king-db-1d963.firebaseapp.com",
    databaseURL: "https://king-db-1d963.firebaseio.com",
    projectId: "king-db-1d963",
    storageBucket: "king-db-1d963.appspot.com",
    messagingSenderId: "61582178356",
    appId: "1:61582178356:web:1a4c75ae44bb4e0a00f261",
    measurementId: "G-7WDGCWCNDE"
  };

  export const createUserProfileDocument = async (userAuth,additionalData) =>{
    if (!userAuth) return;
    const userRef =firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists){
      const {displayName,email} = userAuth;
      const createdAt = new Date() ;
      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      }catch(error){
        console.log('errrrrrrrrrror',error.message);
      }

    }
return userRef;
  };
 
  export const addCollectionAndDocuments = async (
    collectionKey,
    objectsToAdd
  ) =>{
       
    //this is just to push data on firebase or nothing
    const collectionRef = firestore.collection(collectionKey);
      const batch = firestore.batch();
      objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
      });
      return await batch.commit();
  };


  export const convertCollectionsSnapshotToMap =(collections) =>{
    const transformedCollection = collections.docs.map(doc => {
      const {title, items} = doc.data();
      return{
        routeName: encodeURI(title.toLowerCase()),
        id : doc.id,
        title,
        items
      }
    });
return transformedCollection.reduce((accumulator,collection) => {
  accumulator[collection.title.toLowerCase()] = collection;
  return accumulator;
},  {}
);

  }




  firebase.initializeApp(config);
 
export  const  auth = firebase.auth();
export const firestore = firebase.firestore();

const provider  = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promt: 'select_account'});
export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

export default firebase;