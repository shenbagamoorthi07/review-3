import '../components/food.css';
import React, { useState } from "react";
import {Stack,Box} from '@mui/material';

import { Link, useNavigate } from "react-router-dom";

function Food (){
    const navigate=useNavigate();
    function checkdata(){
    let vegnonveg=document.getElementById("vn").value ;
    let vegmenu=document.getElementById("vm").value ;
    let nonvegmenu=document.getElementById("vm1").value ;
    let vegrestaurent=document.getElementById("vr").value ;
    let nonvegrestaurent=document.getElementById("vr1").value ;
    let noitem=document.getElementById("jer").value ;
    let noofitem=document.getElementById("jer1").value ;
    if(vegnonveg==="Select")
    {
      alert("Please fill Veg or Non-veg");
    }
    else if(vegmenu==="Select" && nonvegmenu==="Select")
    {
      alert("Please fill Menu");
    }
  
    else if(vegrestaurent==="Select" && nonvegrestaurent==="Select")
    {
      alert("Please select your Restaurent");
    }
   
    else if(noitem==="" && noofitem==="")
    {
      alert("Please select the number of items");
    }
   
    else{
      alert("order confirm");
      navigate("/Singapore");
      
    }
  }
 
   
    return (
      <div className="foodbg">
      <Stack direction="row">
        <Box  >
        <div>
        <h1 id='internal'>FoodHub</h1>
        <form id='dha'>
          <div>
            <table>
            <tr>
               <td id='cb'><b>Veg or Non-veg</b></td>
               <td><select id='vn'>
              <option type="">Select</option>
              <option type="">Veg</option>
              <option type="">Non-veg</option>
              <option type="">Both</option>
             </select ></td>
           
            </tr>
            </table>
          </div>
        </form>
  
        <form id="leftcon" >
          <table>
            <tr>
            
            <td><b>Veg Menu</b></td>
          <p> <td><select id='vm'>
              <option type="">Select</option>
              <option type="">Idly Sambar</option>
              <option type="">Dosa</option>
              <option type="">Idiyappam</option>
              <option type="">Uttapam</option>
              <option type="">Parrotta</option>
             </select ></td></p>
         
          </tr>
          
          <tr>
          <td><b>Popular restaurents for veg</b></td>
           <p> <td><select id='vr'>
              <option type="">Select</option>
              <option type="">The St. Regis Singapore</option>
              <option type="">The Fullerton Hotel Singapore.</option>
              <option type="">The Warehouse Hotel.</option>
              <option type="">Carlton Hotel Singapore.</option>
             </select ></td></p>
            
         </tr>
      
          <tr>
          <td><b>Number of Items</b></td>
              <td><input type="number" placeholder='Enter the Quantity' id='jer' /></td>
        
         
          </tr><br></br>
            
          </table>
          <button onClick={checkdata} id='sum'>Order</button>
        </form>
      </div>
        </Box>
        <Box  >
        <div>
        <form id="rightcon">
          <table>
   
            <tr>
            
            <td><b>Non-veg Menu</b></td>
           <p> <td><select id='vm1'>
              <option type="">Select</option>
              <option type="">Chicken Briyani</option>
              <option type="">Mutton Briyani</option>
              <option type="">Chettinad Chicken</option>
              <option type="">Mutton Soup</option>
              <option type="">Fish gravy</option>
             </select ></td></p>
         
          </tr>
          
          <tr>
          <td><b>Top restaurents for Non-veg</b></td>
           <p><td><select id='vr1'>
              <option type="">Select</option>
              <option type="">The St. Regis Singapore</option>
              <option type="">The Fullerton Hotel Singapore.</option>
              <option type="">The Warehouse Hotel.</option>
              <option type="">Carlton Hotel Singapore.</option>
             </select ></td></p>
            
         </tr>
      
          <tr>
          <td><b>Number of Items</b></td>
              <td><input type="number" placeholder='Enter the Quantity' id='jer1'/></td>
        
         
          </tr><br></br>
            
          </table>
        </form>
      </div>

        </Box>
      </Stack>
      </div>
    );
  
}
 
export default Food;