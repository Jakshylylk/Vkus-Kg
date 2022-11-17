import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDyM_NWxqt86P0cp8Jqd3cJ9BtvbuDCbU8",
  authDomain: "vkuskg-5713b.firebaseapp.com",
  projectId: "vkuskg-5713b",
  storageBucket: "vkuskg-5713b.appspot.com",
  messagingSenderId: "129193892128",
  appId: "1:129193892128:web:41b2ea29ac6e0d4fca9f45",
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;
