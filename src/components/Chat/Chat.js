import {Avatar, IconButton} from '@mui/material';
import React from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import './Chat.css';

const Chat = () => {
    return (
        <div className='chat'>
            <div className='chat__header'>
                <Avatar/>
                <div className='chat__headerInfo' >
                    <h3>Room Name</h3>
                    <p>Last seen...</p>
                </div>
                <div className='header__panel' >
                    <IconButton>
                        <SearchIcon/>
                    </IconButton>

                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>

            <div className='chat__body'>
                <p className='chat__message chat__reciever' >
                    <span className='chat__name'>mahabeee</span>
                    This test message
                    <span className='chat__time'>12:40</span>
                </p>
                <p className='chat__message chat__reciever' >
                    <span className='chat__name'>mahabeee</span>
                    This test message
                    <span className='chat__time'>12:40</span>
                </p>
                <p className='chat__message chat__reciever' >
                    <span className='chat__name'>mahabeee</span>
                    This test message
                    <span className='chat__time'>12:40</span>
                </p>
            </div>
            <div className='chat__footer' >
                <form>
                    <input type='text' placeholder='Here is your text'  />
                    <input type='submit' />
                </form>
            </div>
        </div>
    );
};

export default Chat;