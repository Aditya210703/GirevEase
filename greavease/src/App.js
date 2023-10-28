import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './Landing/Landing';
import Merge from './Credential/merge';
import Final from './HomePage/Final'
import CardComponent from './Gform/Gcard';
import ShowGriev from './Grievances/Showdata';
import Rules from './Rules/rules';
import YourGrievance from './YourGrievance/YourGrievance';
import PieChart from './InYourArea/PieChar';
import GovernmentHome from './Government/GovernmentHomePage/GovernmentHome';
function App() {
  return (

    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<Merge />} />
        <Route exact path="/home" element={<Final />}>
          <Route exact path="/home/Gform"  element={<CardComponent/>}/>
          <Route exact path="/home/GrievanceShow"  element={<ShowGriev/>}/>
          <Route exact path="/home/Rules" element={<Rules />}/>
          <Route exact path="/home/InYourArea" element={<PieChart></PieChart>}/>
          <Route exact path="/home/YourGrievance" element={<YourGrievance></YourGrievance>}/>
        </Route>
        <Route exact path='/GovernmentHome' element={<GovernmentHome></GovernmentHome>}></Route>
      </Routes>
    </div>

  );
}

export default App;
