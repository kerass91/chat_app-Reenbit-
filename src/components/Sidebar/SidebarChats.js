import {Avatar} from '@mui/material';
import React,{useState, useEffect} from 'react';
import './Sidebar.css'


const SidebarChats = ({addnewchat}) => {

    /* const [seed, setSeed] = useState('')

    useEffect(() => {
        console.log()
        return () => {
            cleanup
        };
    }, [input]); */

    return (
        !addnewchat ? (
            <div className='sidebar__chat'>
            <Avatar/>
            <div className='sidebar__chatInfo'>
                 <h2>TUTORIAL</h2>
                <h3>Last message</h3>
            </div>
        </div>
        ) : (
        <div className='sidebar__chat'>
            <h2>Add New Chat</h2>
        </div>
        )
    )
};

export default SidebarChats;