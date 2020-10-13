import React from 'react'
import './SidebarChannel.css' 
import {useDispatch} from 'react-redux'
import {setChannelInfo} from './features/appSlice'
function SidebarChannel({id , channel}) {
    console.log(channel)
    const dispatch= useDispatch()
    return (
        <div className="sidebarchannel" onClick={()=>dispatch(setChannelInfo({channelId:id, channelname:channel.channelName}))}>
            <h4><span className="sidbarChannel_hash">#</span>{channel.channelName}</h4>
        </div>
    )
}
export default SidebarChannel
