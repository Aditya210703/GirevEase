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
import About from './about/about';
import Process from './process/process'
import TotalGrievance from './TotalGrievancePieChart/TotalGrievances';
import GovernmentGrievanceShow from './Government/GovernmentCenterData/GovernmentGrievanceReported/GovernmentGrievanceShow';
import GrievanceInprocess from './Government/GovernmentCenterData/GovernmentGrievanceInprocess/GovernmentProcess';
import GrievanceSolved from './Government/GovernmentCenterData/GovernmentGrievanceSolved/GovernmentSolved';
import Graphical from './Government/GovernmentCenterData/GovernmentChart/CovernmentChart';
import Gabout from './Government/about/about';
import Gprocess from './Government/process/process';
import Grules from './Government/Rules/rules';
import LocalitySolved from './Solved/LocalitySolved';
import Water from './Departments/Water';

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
          <Route exact path="/home/TotalGrievance" element={<TotalGrievance></TotalGrievance>}/>
          <Route exact path="/home/YourGrievance" element={<YourGrievance></YourGrievance>}/>
          <Route exact path="/home/about" element={<About />}/>
          <Route exact path="/home/process" element={<Process />} />
          <Route exact path="/home/Water" element={<Water></Water>} />
          <Route exact path="/home/solved" element={<LocalitySolved></LocalitySolved>} />
        </Route>
        <Route exact path='/GovernmentHome' element={<GovernmentHome></GovernmentHome>}>
          <Route exact path='/GovernmentHome/Reported' element={<GovernmentGrievanceShow/> }/>
          <Route exact path='/GovernmentHome/Inprocess' element={<GrievanceInprocess/>}/>
          <Route exact path='/GovernmentHome/Solved' element={<GrievanceSolved />}/>
          <Route exact path='/GovernmentHome/Graphical' element={<Graphical/>}/>
          <Route exact path='/GovernmentHome/about' element={<Gabout/>}/>
          <Route exact path='/GovernmentHome/process' element={<Gprocess/>}/>
          <Route exact path='/GovernmentHome/rules' element={<Grules/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
