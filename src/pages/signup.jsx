import React, { Component } from 'react';
import '../components/signup.css';
class Signup extends Component {
  render() { 
    return (

      <div className='signbg'>
        <h1 id='interior'>Sign up</h1>
        <form id='form' action="/">
          <table>
            <tr>
            
              <td><b>Name</b></td>
              <td><input type="text" placeholder='Enter your name' id='uno' required/></td>
           
            </tr>
            <tr>
            
            <td><b>Email</b></td>
            <td><input type="email" placeholder='Enter your name' id='uno' required/></td>
         
          </tr>
          <tr>
            
            <td><b>Password</b></td>
            <td><input type="password" placeholder='Enter your password' id='uno' required/></td>
         
          </tr>
          <tr>
            
            <td><b>Mobile No</b></td>
            <td>
            <select id='sa'>
              <option type="">+91</option>
              <option type="">+81</option>
              <option type="">+71</option>
              <option type="">+61</option><br></br>
              </select>
              
            <input type="tel" placeholder='Enter your number' id='sab' required/></td>
         </tr>
         <tr>
            
            <td><b>Age</b></td>
            <td><input type="number" placeholder='Enter your age' id='uno' required/></td>
         
          </tr>
          <tr>
          <td><b>Date of Birth</b></td>
              <td><input type="date" placeholder='Enter your date of birth' id='uno' required/></td>
          </tr>
          <tr>
            <td><label for="room"><b>Gender </b></label></td>
           <td><select name="Room" id="dab" required>
           <option value="">Select</option>
           <option value="volvo">Male</option>
           <option value="saab">Female</option>
           <option value="sana">other</option>
           </select></td>
       
               
          </tr><br></br>
            
          </table>
          <button id='ros'>Submit</button>
        </form>
      </div>
    );
  }
}
 
export default Signup;