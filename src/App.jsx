import './App.css'
import './assets/styles/index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Clock from './Pages/Clock';
import Chronometer from './Pages/Chronometer';
import Timer from './Pages/Timer';
import Weather from './Pages/Weather';
import Worldclock from './Pages/Worldclock';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Clock/>} />
        <Route path='/Chronometer' element={<Chronometer/>} />
        <Route path='/Timer' element={<Timer/>} />
        <Route path='/Weather' element={<Weather/>} />
        <Route path='/Worldclock' element={<Worldclock/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
