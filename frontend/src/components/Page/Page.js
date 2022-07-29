import './pages.css';
import React from 'react';
import ChatBot from '../ChatBot/ChatBot';
import Navbar from '../Navbar/Navbar';
import Games from '../Games/Games';

const Page = () => {

return (
    <>
        <Navbar />
        <div className='container'>
            <div className='title'><h1>AVAILABLE GAMES</h1></div>
            <div className='main-body'>
                <div className='games-section'>
                    <Games />
                </div>
                <div className='users-section'>
                    <h1>TOP ACTIVE</h1>

                    <div className='top-users'>
                        <h1>user</h1>
                    </div>
                    <h1>COLLEAGUES</h1>

                    <div className='col-users'>
                        <h1>col</h1>
                    </div>
                </div>
                {/* <ChatBot /> */}
            </div>
        </div>
    </>
)
}

export default Page;