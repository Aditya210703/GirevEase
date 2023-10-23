import { Route, Routes } from 'react-router-dom'
import './App.css';
import LandingPage from './Landing/Landing';
import Merge from './Credential/merge';
import Header from './HomePage/home/header';
import Final from './HomePage/Final';
function App() {
  return (
    
    <div className="App">
      {/* <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/signin" element={<Merge />} />
      </Routes>     */}
      {/* <Header></Header> */}
      <Final></Final>
    </div>

  );
}

export default App;
