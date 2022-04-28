import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Start from './pages/Start';
import Agile from './pages/Agile';
import Waterfall from './pages/waterfall';
import ProsAndCons from './pages/ProsAndCons';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <main>
          <Routes>
            <Route path='/' element={<Start />}></Route>
            <Route path='/agile' element={<Agile />}></Route>
            <Route path='/waterfall' element={<Waterfall />}></Route>
            <Route path='/prosAndCons' element={<ProsAndCons />}></Route>
          </Routes>
        </main>

      </div>
    </Router>
  );
}

export default App;


