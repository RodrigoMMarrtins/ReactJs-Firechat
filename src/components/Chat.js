import React, {useState, useEffect, useRef} from 'react'
import SignOut from './SignOut'
import {auth, db} from '../firebase'
import { collection, onSnapshot, query, orderBy, limit} from 'firebase/firestore'
import SendMessage from '../components/SendMessage'

function Chat() {
    const scroll = useRef();
    const [messages, setMessages] = useState([])
    useEffect(() => {
        const msgRef = collection(db, "messages");

        const q = query(msgRef, orderBy('createdAt'), limit(50))

        onSnapshot( q, snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()))
        })
    }, [])
    return (
    <div>
        <SignOut />
        <div className="msgs">
        {messages.map(({ id, text, photoURL, uid}) => (
            <div>
                <div key={id} className={`msg ${uid === auth.currentUser.uid ? 'sent' : 'received'}`}>
                    <img src={photoURL} alt="" />
                    <p>{text}</p>
                </div>
            </div>
        ))}
        </div>
        <SendMessage scroll={scroll}/>
        <div ref={scroll}></div>
    </div>
  )
}

export default Chat