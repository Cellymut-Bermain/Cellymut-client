const api = 'http://localhost:3000/'
// const api = 'http://192.168.100.12:3000/'
const key = '2d2d3b4ac163a776dabb54b7c763d181'
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
const auth = firebase.auth()
const storage = firebase.storage()
export {
  api, storage, fbLogin, provider, key, auth
}
