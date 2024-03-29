import './pages.css';
import React from 'react';
import ChatBot from '../../components/ChatBot/ChatBot';
import Navbar from '../../components/Navbar/Navbar';
import Games from '../../components/Games/Games';
import Leaderboard from '../../components/Leaderboard/Leaderboard';
import Colleagues from '../../components/Colleagues/Colleagues'

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
                    <h3 className='top-active-mobile'>TOP ACTIVE</h3>
                        <Leaderboard />
                    <div className='top-users'>
                    </div>
                    <h3>COLLEAGUES</h3>
                        <Colleagues />
                    <div className='col-users'>
                    </div>
                    <h3 className='games-mobile'>AVAILABLE GAMES</h3>

                </div>
                <ChatBot />
            </div>
        </div>
    </>
)
}

export default Page;