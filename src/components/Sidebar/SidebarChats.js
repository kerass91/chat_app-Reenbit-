import {Avatar} from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import {IconButton} from '@mui/material';
import React from 'react';
import './Sidebar.css'
import { collection, addDoc } from "firebase/firestore";
import { db } from './firebase';
import { Link } from 'react-router-dom';


const SidebarChats = ({id, name, addnewchat, avatar, status}) => {


    const createChat  = () => {
        const room = prompt('Please enter room name')
        if (room){
            try {
                const docRef = addDoc(collection(db, "rooms"), {
                    name: room
                })
                console.log("Document written with ID: ", docRef.id);
              } catch (e) {
                console.error("Error adding document: ", e);
              }
        }
    }

    return (
               (!addnewchat ? (
            <Link to={`/room/${id}`}>
             <div className='sidebar__chat'>
                {}
              <Avatar src={avatar}/>
                <div className='sidebar__chatInfo'>
                 <h2>{name}</h2>
                 <h3>Last message...</h3>
                </div>
                {status ? (
                    <div className='sidebar__chatOnline_g'>Online</div>
                ):<div className='sidebar__chatOnline_r'>Offline</div>
                }
                <div className='sidebar__chatInfo_ind'>1</div>
            </div>
        </Link>
) : (
        <div className='sidebar__chat' onClick={createChat}>
            <IconButton>
                <PersonAddIcon/>
            </IconButton>
        </div>
        ))
        
    );
};

export default SidebarChats;