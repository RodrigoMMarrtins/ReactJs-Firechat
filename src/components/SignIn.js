import React from 'react'
import {Button} from '@material-ui/core'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {auth} from '../firebase.js'

function SignIn() {
    function SignInWithGoogle() {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider);
    }
  return (
    <div style={{ display: 'flex', justifyContent: 'center', height: '100vh', alignItems: 'center', backgroundColor: '#fff', margin: 0 }}>
        <Button style={{ padding: '30px', fontSize: '20px', borderRadius: '8px', fontWeight: '600', backgroundColor: '#fff', color: '#395dff', boxShadow: '0 0 10px #011' }} onClick={SignInWithGoogle}>Sign In With Google</Button> 
    </div>
  )
}

export default SignIn