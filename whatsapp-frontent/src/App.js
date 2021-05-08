import { useEffect, useState } from 'react';
import Pusher from 'pusher-js';

import './App.css';
import Chat from './containers/Chat/Chat';
import Sidebar from './containers/Sidebar/Sidebar';
import axios from './axios';

function App() {
    const [messages, setMessages] = useState();

    useEffect(() => {
        axios
            .get('/messages/sync')
            .then((response) => {
                setMessages(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    useEffect(() => {
        const pusher = new Pusher('f63cf453378f4705794d', {
            cluster: 'ap2',
        });

        const channel = pusher.subscribe('messages');
        channel.bind('inserted', (newMessage) => {
            // alert(JSON.stringify(newMessage));
            setMessages([...messages, newMessage]);
        });

        return () => {
            channel.unbind_all();
            channel.unsubscribe();
        };
    }, [messages]);

    return (
        <div className="app">
            <div className="app__body">
                {/* Sidebar */}
                <Sidebar />

                {/* Chat Component */}
                <Chat messages = {messages}/>
            </div>
        </div>
    );
}

export default App;
