import { Avatar, IconButton } from '@mui/material';
import React, {useState, useEffect} from 'react';
import LoginIcon from '@mui/icons-material/Login';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import './Sidebar.css';
import SidebarChats from './SidebarChats';
import {db} from './firebase';
import { collection, getDocs } from 'firebase/firestore';
import Login from '../Login/Login';

const Sidebar = () => {

  const [rooms, setRooms] = useState([]);
 /*  const [contList, setContList] = useState('') */
  const [filteredList, setFilteredList] = useState('null')

 console.log((rooms.map((room)=> room.data.name)).filter(el => el.toLowerCase().includes((filteredList.toLowerCase()))))

  
 /*   const filterCont =(cList, searchContact) => {
      if(!searchContact) {
        return cList;
      }
      return cList.map((room)=> room.data.name).filter(el => el.toLowerCase().includes((searchContact.toLowerCase()))
      );
    }

   useEffect(()=> {
    const Debounce = setTimeout(()=>{
        const filteredCont = filterCont(contList, rooms);
        setRooms(filteredCont)
    }, 1000);

    return() => clearTimeout(Debounce);
  }, [contList])  */


  const getDb=()=>{
    const roomsCollectionRef = collection(db, 'rooms')
    getDocs(roomsCollectionRef)
    .then(response =>{
      const roomss = response.docs.map(doc =>({
        data:doc.data(), 
        id:doc.id,
      }))
      setRooms(roomss)
    } )
    .catch(error => console.log(error.message))
  }

  useEffect(() => {
    getDb()
  }, []);

 useEffect(() => {
    
 }, [rooms]);


    return (
        <div className='sidebar'>
            <div className='sidebar__header'>
                <Avatar src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Orlando_Bloom_Cannes_2013.jpg/200px-Orlando_Bloom_Cannes_2013.jpg'/>
                <div className='header__headerPanel'>
                  <div>{Login.name}</div>
                    <IconButton>
                      <LoginIcon /* onClick={handleLogout} *//>  
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
                    type='text'
                    value = {filteredList}      
                    placeholder='Search or start new chat'
                     onChange={(e)=> setFilteredList(e.target.value)}                                          
                    />
                </div>
            </div>
            <div className='sidebar__chats'>
{/*             console.log((rooms.map((room)=> room.data.name)).filter(el => el.toLowerCase().includes((filteredList.toLowerCase())))) */}
{/*               {(rooms.map((room)=> room.data.name)).filter(el => el.toLowerCase().includes((filteredList.toLowerCase())).map())} */}
                <SidebarChats addnewchat= {rooms}/> 
                {!filteredList? (
                    rooms.map(room =>  (
                      <SidebarChats 
                      key={room.id} 
                      id={room.id} 
                      name={room.data.name}
                      avatar={room.data.avatar}
                      status={room.data.status}
                      />
                    ))
                ):(
           (rooms.map(room=> room.data.name).filter(el => el.toLowerCase().includes(filteredList.toLowerCase())).map((item) => (
            <>
                    <SidebarChats 
                    key={item.id} 
                    id={item.id} 
                    name={item.data.name}
                    avatar={item.data.avatar}
                    status={item.data.status}
                    />
            </>

      
           ))
                ))
              }    
            </div>
        </div>
    );
};

export default Sidebar;

