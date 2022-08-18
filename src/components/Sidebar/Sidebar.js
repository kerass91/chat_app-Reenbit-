import { Avatar, IconButton } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';
import './Sidebar.css';
import SidebarChats from './SidebarChats';



const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebar__header'>
                <Avatar/>
                <div className='header__headerPanel'>
                    <IconButton>
                      <LoginIcon/>  
                    </IconButton>
                    <IconButton>
                      <ChatIcon/>  
                    </IconButton>
                    <IconButton>
                      <MoreVertIcon/>  
                    </IconButton>
                    
                </div>
            </div>
            <div className='sidebar__search'>
                <div className='sidebar__searchContainer'>
                    <SearchIcon/>
                    <input 
                    type={'search'}      
                    placeholder='Search...'
                                             
                    />
                </div>
            </div>
            <div className='sidebar__chats'>

                <SidebarChats addnewchat/>
                <SidebarChats/>
                <SidebarChats/>
                <SidebarChats/>
                <SidebarChats/>

            </div>
        </div>
    );
};

export default Sidebar;