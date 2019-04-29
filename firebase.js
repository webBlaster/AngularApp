// Initialize Firebase
var config = {
  apiKey: "AIzaSyC17Ru5wuLFsD2lwIZVWzwNTTFvk_USkXU",
  authDomain: "angularapp-554aa.firebaseapp.com",
  databaseURL: "https://angularapp-554aa.firebaseio.com",
  projectId: "angularapp-554aa",
  storageBucket: "angularapp-554aa.appspot.com",
  messagingSenderId: "728697614728"
};
firebase.initializeApp(config);

//Get firestore and authentication reference
const auth = firebase.auth();
const database = firebase.firestore();

//firestore settings
database.settings({ timestampsInSnapshots: true });
