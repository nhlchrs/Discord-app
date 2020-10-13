import React from 'react'
import { Avatar } from '@material-ui/core';
import {useSelector} from 'react-redux'
import {selectUser} from './features/userSlice'
import './Message.css'
function Message({messages, timestamp, user}) {

    return (
        <div className="message">
        <Avatar src={user.photoURL}/>
            <div className="message_info">
                <h4>{user.displayName}<span className="message_timestamp">{new Date(timestamp?.toDate()).toUTCString()}</span>    </h4>
                <p>{messages}</p>
            </div>
        </div>
    )
}

export default Message
