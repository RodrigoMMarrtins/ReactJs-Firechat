import { Button, Input } from '@material-ui/core'
import React, {useState} from 'react'
import {db, auth} from '../firebase'
import {doc, setDoc, collection, Timestamp} from 'firebase/firestore'


function SendMessage({ scroll }) {
    const [msg, setMsg] = useState('')

    async function sendMessage() {
      const {uid, photoURL} = auth.currentUser
      const msgRef = collection(db, 'messages')
      await  setDoc(doc(msgRef), {
        text: msg,
        photoURL,
        uid,
        createdAt: Timestamp.now()
          })
        setMsg('')
        scroll.current.scrollIntoView({behavior: 'smooth'})
    } 
    
    const handleClick = (e) => {
      e.preventDefault()
      if(!msg) return
      sendMessage()
    }

  return (
    <div>
        <form onSubmit={handleClick}>
          <div className="sendMsg">
              <Input style={{ width: '78%', fontSize: '15px', fontWeight: '550', marginLeft: '5px', marginBottom: '-3px' }} value={msg} onChange={ (e) => {
                setMsg(e.target.value)}} placeholder="Message" type='text'/>
              <Button style={{ width: '18%', fontSize: '15px', fontWeight: '550', margin: '4px 5% -13px 5%', maxWidth: '200px', color: '#395dff'}} type='submit'>
                  Send
              </Button>
          </div>
        </form>
    </div>
  )
}

export default SendMessage