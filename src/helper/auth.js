import firebase from "firebase/app";
import "firebase/auth";
import {firebaseConfig} from "./firebase.config";
import {clearLoggedInData, setLoggedInData} from "./storage";
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}else {
    firebase.app(); // if already initialized, use that one
}

const sendUserInfo = (user, setLoggedInUser, redirectPage) => {
    let data = new FormData();
    data.append('name', user.name)
    data.append('email', user.email)
    data.append('image', user.image)
    data.append('admin', 'false')
    fetch(`${process.env.REACT_APP_BASE_URL}/adduser`,{
        method: 'POST',
        body: data
    })
        .then(r => r.json())
        .then(data=>{
            setLoggedInUser(data[0])
            setLoggedInData(JSON.stringify(data[0]))
            redirectPage()
        });
}

export const createUserWithEmail = (name, email, password, setLoggedInUser, redirectPage) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(res=>{
            const user = res.user
            const currentUser = firebase.auth().currentUser
            currentUser.updateProfile({
                displayName: name
            }).then(()=>{
                const data = {
                    name: name,
                    email: user.email
                }
                sendUserInfo(data,setLoggedInUser,redirectPage)
            })
        })
        .catch(err=>{
            console.log(err)
        })
}

export const loginWithEmail = (email, password, setLoggedInUser, redirectPage) => {
    firebase.auth().signInWithEmailAndPassword(email,password)
        .then(res=>{
            const user = {
                name: res.user.displayName,
                email: res.user.email
            }
            sendUserInfo(user,setLoggedInUser, redirectPage)
        })
        .catch(err => {
            console.log(err);
        })
}

export const loginWithGoogle = (setLoggedInUser, redirectPage) =>{
    firebase.auth()
        .signInWithPopup(new firebase.auth.GoogleAuthProvider())
        .then((result) => {
            const user = {
                name: result.user.displayName,
                email: result.user.email,
                image: result.user.photoURL,
            }
            sendUserInfo(user,setLoggedInUser, redirectPage)
        }).catch((error) => {
            console.log(error)
        });
}

export const loginWithFacebook = (setLoggedInUser, redirectPage) =>{
    firebase.auth()
        .signInWithPopup(new firebase.auth.FacebookAuthProvider())
        .then((result) => {
            const user = {
                name: result.user.displayName,
                email: result.user.email,
                image: result.user.photoURL
            }
            sendUserInfo(user,setLoggedInUser,redirectPage)
        }).catch((error) => {
        console.log(error)
    });
}

export const logOut = setLoggedInUser => {
    firebase.auth().signOut().then(() => {
        setLoggedInUser({})
        clearLoggedInData()
    }).catch((error) => {
        // An error happened.
    });
}