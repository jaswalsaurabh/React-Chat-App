import React from 'react'
import {ChatEngine} from  'react-chat-engine'
import './App.css'
import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LoginForm'

const App = () => {
    
    if(!localStorage.getItem('username')) return <LoginForm/>

    return (
        <ChatEngine 
            height='100vh'
            projectID='c3dba283-52e3-477f-b546-d21110044097'
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps} />}
        />
    )
}

export default App
