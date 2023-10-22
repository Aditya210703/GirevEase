import { Route, Routes } from 'react-router-dom'
import './App.css';
import LandingPage from './Landing/Landing';
import Merge from './Credential/merge';
function App() {
  return (
    
    <div className="App">
      <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/signin" element={<Merge />} />
      </Routes>    
    </div>

  );
}

export default App;
