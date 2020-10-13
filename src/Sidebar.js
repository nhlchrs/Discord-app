import React,{useEffect, useState} from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import SidebarChannel from './SidebarChannel'
import './Sidebar.css';
import {useSelector} from 'react-redux';
import {selectUser} from './features/userSlice'
import InfoIcon from '@material-ui/icons/Info';
import CallIcon from '@material-ui/icons/Call';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import { Avatar } from '@material-ui/core';
import MicIcon from '@material-ui/icons/Mic';
import HeadsetIcon from '@material-ui/icons/Headset';
import SettingsIcon from '@material-ui/icons/Settings';
import db, { auth } from './firebase';
function Sidebar() {
    const [channels, setChannels] = useState([])
    const  userDetails = useSelector(selectUser);
    console.log(userDetails)

    useEffect(() => {
        db.collection('channels').onSnapshot(snapshot=>{
            setChannels(snapshot.docs.map(doc=>({
                id:doc.id,
                channels:doc.data()
            })))
        })
    }, [])

    const handleChange=()=>{
        const channelName= prompt("Enter a Channel Name");
        if(channelName){
            db.collection('channels').add({
                channelName:channelName
            })
        }
    }

    return (
        <div className="sidebar">
            <div className="sidebar_top">
                <h3>{userDetails.displayName}</h3>
                <ExpandMoreIcon/>
            </div>
            <div className="sidebar_channels">
                <div className="sidebarChannel_headers">
                    <div className="sidebar_header">
                        <ExpandMoreIcon/>
                        <h4>Text Channel</h4>
                    </div>
                    <AddIcon onClick={handleChange} className="sidebar_addchannels" />
                </div>
                <div className="sidebar_channelList">
                {channels.map(({id, channels})=>(
                    <SidebarChannel id={id} channel={channels}/>
                ))}
            </div>
            </div>
            <div className="sidebar_voice">
                <SignalCellularAltIcon fontSize="large" className="sidebarvoice_icon" />
                <div className="sidebarVoice_info">
                    <h3>Voice Connected</h3>
                    <p>stream</p>
                </div>
                <div className="sidebarvoice_icons">
                    <InfoIcon />
                    <CallIcon/>
                </div>
            </div>
            <div className="sidebar_profile">
            <Avatar onClick={()=>auth.signOut()} src={userDetails.photoURL} />
            <div className="sidebarProfile_info">
                <h3>{userDetails.displayName}</h3>
                <p>#{userDetails.uid.substring(0,5)}</p>
            </div>
            <div className="sidebarProfile_icons">
                <MicIcon/>
                <HeadsetIcon/>
                <SettingsIcon/>
            </div>
            </div>
        </div>
    )
}

export default Sidebar
