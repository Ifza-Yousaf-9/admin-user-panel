import { BrowserRouter } from 'react-router-dom';
import Dashboard from './Dashboard'; 
import Navbar from './Navbar';
import './App.css'

function App() {
  return (
    <BrowserRouter>
     <Dashboard />
     <Navbar />
    </BrowserRouter>
  );
}

export default App;
