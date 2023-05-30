import Singapore from './pages/singapore';
import Signup from './pages/signup';
import Home from './pages/home';
import Cab from './pages/cab';
import Login from './pages/login';
import Food from './pages/food';
import Hotel from './pages/hotel';
import Conform from './pages/conform';
import Place from './pages/place';


import './App.css';
import {Routes,Route} from 'react-router-dom';
 
function App() {
  return (
    <div className="App">
    <Routes>
    <Route path="/home" element={<Home/>}></Route> 
					<Route path="/" element={<Login/>}></Route>
					<Route path="/signup" element={<Signup/>}></Route>
					<Route path="/singapore" element={<Singapore/>}></Route>
					<Route path="/cab" element={<Cab/>}></Route>
					<Route path="/food" element={<Food/>}></Route>
					<Route path="/hotel" element={<Hotel/>}></Route>
					<Route path="/conform" element={<Conform/>}></Route>
					<Route path="/place" element={<Place/>}></Route>
					
					
    </Routes>
    </div>	
  );
}
 
export default App;
