import React from 'react'
import { Avatar } from '@material-ui/core';
import './Message.css'
function Message() {
    return (
        <div className="message">
        <Avatar src="https://pbs.twimg.com/profile_banners/1574119956/1600835906/600x200"/>
            <div className="message_info">
                <h4>Nhlchrs<span className="message_timestamp">this is A timestamp</span>    </h4>
                <p>This is a message</p>
            </div>
        </div>
    )
}

export default Message
