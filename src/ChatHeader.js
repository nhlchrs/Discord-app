import React from 'react'
import NotificationsIcon from '@material-ui/icons/Notifications';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import GroupIcon from '@material-ui/icons/Group';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import HelpRoundedIcon from '@material-ui/icons/HelpRounded';
import './ChatHeader.css';

function ChatHeader({channelName, channelId}) {
    return (
        <div className="chatHeader">
            <div className="chatHeader_left">
                <h3><span className="chatHeader_hash">#</span>{channelName}</h3>
            </div>
            <div className="chatHeader_right">
                <NotificationsIcon/>
                <LocationOnIcon />
                <GroupIcon/>
                <div className="chatHeader_search">
                    <input type="text" placeholder="Search"/>
                    <SearchRoundedIcon/>
                </div>
                <SendRoundedIcon/>
                <HelpRoundedIcon/>
            </div>
        </div>
    )
}

export default ChatHeader;
