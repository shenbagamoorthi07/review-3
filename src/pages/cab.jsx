import '../components/cab.css';
import React, { Component } from 'react';
import '../components/cab.css';
class Car extends Component {
  render() { 
    return (

      <div className='cabbg'>
        <h1 id='interiors'>Cabs</h1>
        <form id='forms' action="/conform">
          <table>
            <tr>
            
              <td><b>Pickup Point</b></td>
              <td><input type="text" placeholder='Enter your pickup point' id='unos' required/></td>
           
            </tr>
            <tr>
            
            <td><b>Destination</b></td>
            <td><input type="text" placeholder='Enter your destination' id='unos' required/></td>
         
          </tr>
        
          <tr>
            
            <td><b>Mobile No</b></td>
            <td>
            <select id='sas'>
              <option type="">+91</option>
              <option type="">+81</option>
              <option type="">+71</option>
              <option type="">+61</option><br></br>
              </select>
              
            <input type="tel" placeholder='Enter your number' id='sabs' required/></td>
         </tr>
       
          <tr>
            <td><label for="room"><b>Vehicle </b></label></td>
           <td><select name="Room" id="dabs" required>
           <option value="">Select</option>
           <option value="volvo">Car</option>
           <option value="saab">Bike</option>
           <option value="sana">Auto</option>
           </select></td>
       
               
          </tr><br></br>
            
          </table>
          <button id='ross'>Confirm</button>
        </form>
      </div>
    );
  }
}
 
export default Car;