const api = 'http://localhost:3000/'
const firebase = require('firebase')
const config = {
  storageBucket: "cellymut-staging.appspot.com",
  projectId: "cellymut-staging",
  authDomain: "cellymut-staging.firebaseapp.com",
  apiKey: 'AIzaSyDDdrXkY2Rs_JhvmI5R7AG1jdw5a6Ja1_A'
};
firebase.initializeApp(config);
const provider = new firebase.auth.FacebookAuthProvider();
const fbLogin = firebase.auth()
const storage = firebase.storage()
export {
  api, storage, fbLogin, provider
}
