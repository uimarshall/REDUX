// CONFIG FILE FOR OUR FIREBASE SET UP
// ======================================
// Import core functions
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore"; //db
var firebaseConfig = {
	apiKey: "AIzaSyDg4J9xHpoWzygiV-q7FAkqQzSx7D-BzRw",
	authDomain: "project-manager-4f0f7.firebaseapp.com",
	databaseURL: "https://project-manager-4f0f7.firebaseio.com",
	projectId: "project-manager-4f0f7",
	storageBucket: "",
	messagingSenderId: "464522022208",
	appId: "1:464522022208:web:3a7e41ee49cf43cd5ffea5"
};
// Initialize Firebase - to connect our app to firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.firestore().settings({ timestampsInSnapshots: true });
export default firebase;
