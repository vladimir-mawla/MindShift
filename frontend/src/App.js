import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Landing from './components/Landing/Landing';
import Games from './components/Games/Games';
import Questions from './components/Questions/Questions';
import Leaderboard from './components/Leaderboard/Leaderboard';
import Rewards from './components/Rewards/Rewards';
import Order from "./components/Order/Order";
import AddGame from './components/AddGame/AddGame';
import AddGameQuestion from './components/AddGameQuestions/AddGameQuestions';
import AddOptions from './components/AddOptions/AddOptions';
import AddReward from './components/AddReward/AddReward';
import Profile from './components/Profile/Profile';
import Colleagues from './components/Colleagues/Colleagues';
import AddPoints from './components/AddPoints/AddPoints';
import AddBadge from './components/AddBadge/AddBadge';
import Dashboard from './components/canvas/Dashboard'
import Page from './components/Page/Page';
import Employees from './components/Employees/Employees';
import PlayedGames from './components/PlayedGames/PlayedGames';
import AnsweredQuestions from './components/AnsweredQuestions/AnsweredQuestions';
import Admin from './components/Admin/Admin';
import ChatBot from './components/ChatBot/ChatBot';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/games" element={<Games />}></Route>
        <Route path="/questions" element={<Questions />}></Route>
        <Route path="/leaderboards" element={<Leaderboard />}></Route>
        <Route path="/rewards" element={<Rewards />}></Route>
        <Route path="/order" element={<Order />}></Route>
        <Route path="/add_game" element={<AddGame />}></Route>
        <Route path="/add_game_questions" element={<AddGameQuestion />}></Route>
        <Route path="/add_options" element={<AddOptions />}></Route>
        <Route path="/add_reward" element={<AddReward />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/c" element={<Colleagues />}></Route>
        <Route path="/add_points" element={<AddPoints />}></Route>
        <Route path="/add_badge" element={<AddBadge />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/page" element={<Page />}></Route>
        <Route path="/employees" element={<Employees />}></Route>
        <Route path="/played_games" element={<PlayedGames />}></Route>
        <Route path="/answered_questions" element={<AnsweredQuestions />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/chatbot" element={<ChatBot />}></Route>
      </Routes>
    </BrowserRouter>
    );
}

export default App;
