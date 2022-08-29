import {Avatar, IconButton, Button} from '@mui/material';
import React,{useEffect, useState} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import './Chat.css';
import { useParams } from 'react-router-dom';
import { db } from '../Sidebar/firebase';
import { doc, onSnapshot, collection , addDoc, deleteDoc, orderBy  } from "firebase/firestore";
/* import Sidebar from '../Sidebar/Sidebar'; */


const Chat = () => {

    const {roomId} = useParams();
    const [roomname, setRoomName] = useState(null);
    const [roomImg, setRoomImg] = useState(null)
    const [messages, setMessages] = useState([]);

    const [input, setInput] = useState('')

    useEffect(() => {
        if(roomId) {
            onSnapshot(doc(db, 'rooms', roomId), (doc)=> {
                setRoomName(doc.data().name)
                setRoomImg(doc.data().avatar)
            });

            onSnapshot(collection(db, 'rooms', roomId, 'messages'), orderBy('time', 'asc'), (snapshot)=> {
                setMessages(snapshot.docs.map(doc=> doc.data()))
            });

        }
    }, [roomId])


    const getApiData = async () => {
        const response = await fetch(
          "https://api.chucknorris.io/jokes/random"
        ).then((response) => response.json());
        /* setTimeout(setMessages([...messages, response]), 5000); */
        
        const docChak= collection(db, 'rooms')
        addDoc(collection(docChak, roomId, 'messages'), {
        name:roomname,
        message: response.value,
        time: new Date().toLocaleTimeString('en-US')})
        
        // !!!
    };
    


   const sendMessage =(e)=> {
            e.preventDefault();
            if (input==='')
            {
                return alert('Please enter your message')
            }

           const docRef= collection(db, 'rooms')
            addDoc(collection(docRef, roomId, 'messages'), {
            name:'Me',
            message: input,
            time: new Date().toLocaleTimeString('en-US')})
        setInput('')
        setTimeout(getApiData, 10000)

    }
/*     const handleDelete = (key) => {
        if(key === roomId) {
            deleteDoc(collection('rooms', roomId, 'messeges'))
        }
        console.log(roomId)
    } */
    return (
        <div className='chat'>
            <div className='chat__header'>
                <Avatar src={roomImg}/>
                <div className='chat__headerInfo' >
                    <h3>{roomname}</h3>

                </div>
                <div className='header__panel' >
                    <IconButton>
                        <SearchIcon/>
                    </IconButton>
                    <IconButton>
                        <DeleteIcon 
/*                         key={roomId}                      
                        onclick={handleDelete()} *//>
                    </IconButton>
                </div>
            </div>

            <div className='chat__body'>
                {
                    messages.map(message=>(
                        <p className={message.name === roomname?'chat__message chat__reciever':'chat__message chat__reciever2'} >
                        <span className='chat__name'>{message.name}</span>
                        {message.message}
                        <span className='chat__time'>{message.time}</span>
                    </p>
                    ))
                }
            </div>
            <div className='chat__footer' >
                <form onSubmit={sendMessage}>
                    <input type='text' 
                    value={input} 
                    placeholder='Type your message'  
                    onChange={e=>setInput(e.target.value)} />
                    <Button onClick={sendMessage}>
                      <SendIcon/>  
                    </Button>
                     <input type='submit' /> 
                </form>
            </div>
        </div>
    );
};

export default Chat;