import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Landing from './components/Landing';
import Games from './components/Games';
import Questions from './components/Questions';
import Leaderboard from './components/Leaderbord';
import Rewards from './components/Rewards';
import Order from "./components/Order"


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
      </Routes>
    </BrowserRouter>
    );
}

export default App;
