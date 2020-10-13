import React,{useEffect, useState} from 'react'
import './Chat.css'
import {useSelector} from "react-redux";
import ChatHeader from './ChatHeader'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import GifIcon from '@material-ui/icons/Gif';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import Message from './Message'
import {selectChannelname,selectChannelId} from './features/appSlice'
import {selectUser} from './features/userSlice'
import db from './firebase';
import firebase from 'firebase'
function Chat() {
    const [messages, setmessages] = useState([])
    const [input, setInput] = useState('')
    const  channelName = useSelector(selectChannelname)
    const  channelId = useSelector(selectChannelId)
    const user = useSelector(selectUser)
    useEffect(() => {
        if(channelId){
        db.collection('channels').doc(channelId).collection('messages').orderBy("timestamp", "desc").onSnapshot((snapshot)=>
            setmessages(snapshot.docs.map((doc)=>doc.data()))
        )
        }
    }, [channelId])

    const sendMessage=(e)=>{
    e.preventDefault();
    db.collection('channels').doc(channelId).collection('messages').add({
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        messages:input,
        user:user
    })

setInput("")
}
console.log(messages)

    return (
        <div className="chat">
            <ChatHeader channelName={channelName} channelId= {channelId}/>
            <div className="chatMessages">
                {messages.map((message)=>(
                    <Message timestamp={message.timestamp} messages={message.messages} user={message.user}/>
                ))}
            </div>
            <div className="chat_input">
                <AddCircleIcon fontSize="large" />
                <form>
                    <input type="text" disabled={!channelId} value={input} onChange={(e)=>setInput(e.target.value)} placeholder={`Message ${channelName}`}/>
                    <button className="chat_inputButton" onClick={sendMessage}  type="submit">Send Message</button>
                </form>
                <div className="chat_inputIcon">
                    <CardGiftcardIcon fontSize="large"/>
                    <GifIcon fontSize="large"/>
                    <EmojiEmotionsIcon fontSize="large"/>
                </div>
            </div>
        </div>
    )

}

export default Chat
