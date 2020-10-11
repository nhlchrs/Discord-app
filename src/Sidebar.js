import React from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import SidebarChannel from './SidebarChannel'
import './Sidebar.css';
import InfoIcon from '@material-ui/icons/Info';
import CallIcon from '@material-ui/icons/Call';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import { Avatar } from '@material-ui/core';
import MicIcon from '@material-ui/icons/Mic';
import HeadsetIcon from '@material-ui/icons/Headset';
import SettingsIcon from '@material-ui/icons/Settings';
function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar_top">
                <h3>Nihal Chaurasia</h3>
                <ExpandMoreIcon/>
            </div>
            <div className="sidebar_channels">
                <div className="sidebarChannel_headers">
                    <div className="sidebar_header">
                        <ExpandMoreIcon/>
                        <h4>Text Channel</h4>
                    </div>
                    <AddIcon className="sidebar_addchannels" />
                </div>
                <div className="sidebar_channelList">
                <SidebarChannel/>
                <SidebarChannel/>
                <SidebarChannel/>
                <SidebarChannel/>
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
            <Avatar src="https://pbs.twimg.com/profile_banners/1574119956/1600835906/600x200" />
            <div className="sidebarProfile_info">
                <h3>NhlChrs</h3>
                <p>#ThisIsMe</p>
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
