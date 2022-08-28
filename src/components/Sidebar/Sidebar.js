import { Avatar, IconButton } from '@mui/material';
import React, {useState, useEffect} from 'react';
import LoginIcon from '@mui/icons-material/Login';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import './Sidebar.css';
import SidebarChats from './SidebarChats';
import {db} from './firebase';
import { collection, getDocs } from 'firebase/firestore';

const Sidebar = () => {

  const [rooms, setRooms] = useState([]);
  const [contList, setContList] = useState('')
  const [filteredList, setFilteredList] = useState([])

 console.log((rooms.map((room)=> room.data.name)).filter(el => el.toLowerCase().includes((contList.toLowerCase()))))

  
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

  console.log(rooms)



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



/*    console.log((rooms[0].data.name).toLowerCase()) */
 

    return (
        <div className='sidebar'>
            <div className='sidebar__header'>
                <Avatar/>
                <div className='header__headerPanel'>
                    <IconButton>
                      <LoginIcon/>  
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
              {(rooms.map((room)=> room.data.name)).filter(el => el.toLowerCase().includes((filteredList.toLowerCase()))).map((newPerson) => (
                <SidebarChats 
                key={newPerson.id} 
                id={newPerson.id} 
                name={newPerson.data.name}
                avatar={newPerson.data.avatar}
                />
              ))}
{/*                 <SidebarChats addnewchat= {rooms}/> {
                  rooms.map(room => {
                    return <SidebarChats 
                    key={room.id} 
                    id={room.id} 
                    name={room.data.name}
                    avatar={room.data.avatar}
                    />
                  })
                } */}

            </div>
        </div>
    );
};

export default Sidebar;