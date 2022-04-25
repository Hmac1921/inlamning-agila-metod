import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Start from './pages/Start';
import Agile from './pages/Agile';
import Waterfall from './pages/waterfall';

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
          </Routes>
        </main>
        <footer>
          <nav>
            <Link to={"/"}> Start // </Link>
            <Link to={"/agile"}> Agile // </Link>
            <Link to={"/waterfall"}> Waterfall </Link>

          </nav>
        </footer>
      </div>
    </Router>
  );
}

export default App;
