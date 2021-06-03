import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: 'AIzaSyD5KDw6ngVHRat7uhIW7pUDaaSvYf3KYsI',
  authDomain: 'ninja-road-map.firebaseapp.com',
  projectId: 'ninja-road-map',
  databaseURL: 'https://ninja-road-map.firebaseio.com',
  storageBucket: 'ninja-road-map.appspot.com',
  messagingSenderId: '179818208751',
  appId: '1:179818208751:web:ef05178ad784ee1a116a1a',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
