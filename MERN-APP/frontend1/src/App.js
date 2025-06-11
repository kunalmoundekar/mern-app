 
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Update';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Navbar />
      <Routes>  
          <Route path="/create" element={<Create />} />
          <Route path="/read" element={<Read />} />
          <Route path="/:id" element={<Update />} />  
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
