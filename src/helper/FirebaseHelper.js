import firebase from 'firebase'
import 'firebase/auth'
import { firebaseEnv } from '../system/Collection'


const firebaseHelper = firebase.initializeApp({
    apiKey: firebaseEnv.apiKey,
    authDomain: firebaseEnv.authDomain,
    databaseURL: firebaseEnv.databaseURL,
    projectId: firebaseEnv.projectId,
    storageBucket: firebaseEnv.storageBucket,
    messagingSenderId: firebaseEnv.messagingSenderId,
    appId: firebaseEnv.appId,
    measurementId: firebaseEnv.measurementId
})

export const auth = firebaseHelper.auth()
export default firebaseHelper

