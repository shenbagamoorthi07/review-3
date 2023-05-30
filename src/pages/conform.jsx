import React, { Component } from 'react';
import {Link} from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import '../components/conform.css';
class Conform extends Component {
    render() { 
      return (
        <div>
            <Link to="/singapore" id='kr'><ArrowBackIcon/></Link>
            <h2 id='sug'>booking confirmed</h2>
        </div>
      )
    }
}
 
export default Conform;