import './pages.css';
import React from 'react';
import ChatBot from '../ChatBot/ChatBot';
import Navbar from '../Navbar/Navbar';
import Games from '../Games/Games';
import Leaderboard from '../Leaderboard/Leaderboard';
import Colleagues from '../Colleagues/Colleagues'

const Page = () => {

return (
    <>
        <Navbar link={"REWARDS"} to={'rewards'}/>
        <div className='container'>
            <div className='title'>
                <h1>AVAILABLE GAMES</h1>
                <h3>TOP ACTIVE</h3>
            </div>
            <div className='main-body'>
                <div className='games-section'>
                    <Games />
                </div>
                <div className='users-section'>
                        <Leaderboard />
                    <div className='top-users'>
                    </div>
                    <h3>COLLEAGUES</h3>
                        <Colleagues />
                    <div className='col-users'>
                    </div>
                </div>
                {/* <ChatBot /> */}
            </div>
        </div>
    </>
)
}

export default Page;