import { useState } from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, InsertEmoticon, MicRounded, MoreVertRounded, SearchOutlined } from '@material-ui/icons';

import axios from '../../axios';

import './Chat.css';

const Chat = ({ messages }) => {
    const [input, setInput] = useState('');

    const sendMessage = async (event) => {
        event.preventDefault();

        await axios.post('/messages/new', {
            message: input,
            name: 'Sayan',
            timestamp: 'Just now!',
            received: true,
        });

        setInput('');
    };

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar />

                <div className="chat__headerInfo">
                    <h3>Room name</h3>
                    <p>Last seen at...</p>
                </div>

                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>

                    <IconButton>
                        <AttachFile />
                    </IconButton>

                    <IconButton>
                        <MoreVertRounded />
                    </IconButton>
                </div>
            </div>

            <div className="chat__body">
                {
                    messages && messages.map((message, index) => {
                        return (
                            <p className = {`chat__message ${message.received && 'chat_receiver'}`} key = {index}>
                                <span className = "chat__name">{message.name}</span>

                                {message.message}
                                <span className = "chat__timestamp">
                                    {message.timestamp}
                                </span>
                            </p>
                        );
                    })
                }
                {/* <p className="chat__message">
                    <span className="chat__name">Sayan</span>

                    This is a message

                    <span className="chat__timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p> */}


                {/* <p className="chat__message chat_receiver">
                    <span className="chat__name">Sayan</span>

                    This is a message

                    <span className="chat__timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>


                <p className="chat__message">
                    <span className="chat__name">Sayan</span>

                    This is a message

                    <span className="chat__timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p> */}
            </div>

            <div className="chat__footer">
                <InsertEmoticon />

                <form action="">
                    <input type="text" placeholder="Type a message" value = {input} onChange = {event => setInput(event.target.value)}/>
                    <button onClick = {sendMessage} type = "submit">Send a message</button>
                </form>

                <MicRounded />
            </div>
        </div>
    );
}

export default Chat;