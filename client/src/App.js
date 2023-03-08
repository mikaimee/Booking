import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"

// Components
import Home from './screens/Home';
import List from './screens/List';
import SingleHotel from './screens/SingleHotel';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/hotels" element={<List/>} />
        <Route path="/hotels/:id" element={<SingleHotel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
