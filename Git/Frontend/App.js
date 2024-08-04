
import './App.css';
import Anchor from './components/Anchor';
import AnchorPage from './components/AnchorPage';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Channel from './components/Channel';
import ChannelPage from './components/ChannelPage';
function App() {
  return (
    <Router>
       <Navbar />
        <Routes>
            <Route path='/anchor' element={<Anchor/>}/>
            <Route path='/' element={<Channel/>}/>
            <Route path='/anchor/:anchorName' element={<AnchorPage />} />
            <Route path='/:channelName' element={<ChannelPage />} />
          </Routes>
        </Router>
  );
}

export default App;
