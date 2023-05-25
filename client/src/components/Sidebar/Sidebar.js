import React from 'react';
import './Sidebar.css'
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import TwitterIcon from '@mui/icons-material/Twitter';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailIcon from '@mui/icons-material/Email';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from '@mui/material';

function Sidebar() {
    return (
        <div className="sidebar">
            <TwitterIcon className="sidebar__twitterIcon"/>
            <SidebarOption text="Home" Icon={HomeIcon}/>
            <SidebarOption text="Explore" Icon={SearchIcon}/>
            <SidebarOption text="Notifications" Icon={NotificationsIcon}/>
            <SidebarOption text="Messages" Icon={EmailIcon}/>
            <SidebarOption text="Bookmarks" Icon={BookmarkIcon}/>
            <SidebarOption text="Profile" Icon={PersonIcon}/>
            <SidebarOption text="More" Icon={MoreHorizIcon}/>

            <Button variant="outlined" className="sidebar__tweet" fullWidth> Tweet </Button>
        </div>
    )
}

export default Sidebar;