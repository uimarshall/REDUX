import { getFirebase } from "react-redux-firebase";
import { getFirestore } from "redux-firestore";

export const signIn = credentials => {
  return (dispatch, getState, { getFirebase }) => {
    // Initialise firebase instance
    const firebase = getFirebase();
    // Use firebase authentication service to signin wt email & password
    // If the email & password is correct it will sign a user in and give a response
    // We then dispatch the response by attaching the 'then()' mtd
    // Any 'action' dispatched is received in the 'reducer'
    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({ type: "LOGIN_SUCCESS" });
      })
      .catch(err => {
        dispatch({ type: "LOGIN_ERROR", err });
      });
  };
};

// Firebase signout func

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: "SIGNOUT_SUCCESS" });
      });
  };
};

export const signUp = newUser => {
  // getFirebase helps us connect to d firebase auth service
  //When we create a new user, The auth service stores user info such as email & UID
  // We can store additional info concerning the user in the 'User coll' in firestore and create a new docs for each 'UID' generated
  // getFirestore helps us connect/comunicate wt d firestore db to post data
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //   Invoke firebase/firestore
    const firebase = getFirebase();
    const firestore = getFirestore();
    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      //   Info about the newUser created/signup is stored in the 'res.user' in firebase
      .then(res => {
        //  Create a record for the newUser that just sign up in 'firestore'
        return (
          firestore
            .collection("users")
            //We want to add a doc to d 'users coll', if we 'add()' mtd, firestore auto generate a new 'id' for dat doc
            // We dont want a new 'id' generated, hence we use 'doc()' mtd to reference d 'id' generated when d user signup in firebase auth service
            .doc(res.user.uid)
            // We set d ffg pties for this doc/user
            .set({
              firstName: newUser.firstName,
              lastName: newUser.lastName,
              initials: newUser.firstName[0] + newUser.lastName[0]
            })
        );
      })
      .then(() => {
        dispatch({ type: "SIGNUP_SUCCESS" });
      })
      .catch(err => {
        dispatch({ type: "SIGNUP_ERROR", err });
      });
  };
};
