import '../components/home.css';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import {Link} from 'react-router-dom';
import FormControl from '@mui/material/FormControl';
import { Navigate, useNavigate } from 'react-router-dom';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import * as React from 'react';
import { color } from '@mui/system';

const Home=()=>{
    const [Age, setAge] = React.useState('');
    const navigate=useNavigate();
    const handleChange = (event) => {
      setAge(event.target.value);
      let c=event.target.value;

      if(c==="Singapore"){
        navigate('/singapore');
      }
     
    
    };
  

    return(
      <div>

      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            VISIT INDIA
          </Typography>
          <Button color="inherit"><Link to='/' id='lon'>LOGOUT</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>

    <div className='front'>
   <h1 id='tem'><b>Choose your city</b></h1><br></br>
           
   <div className="city">
    <FormControl sx={{width:'300px'} }>
    <InputLabel id="demo-simple-select-label">Select your city</InputLabel>
      <Select id="city" sx={{color:'black'}}
 
    
    value={Age}
    label="Select your city"
    onChange={handleChange}
      >
    <MenuItem value="Singapore">Singapore</MenuItem>
    
  </Select>
  </FormControl>
  <form id='nit'>
  <div>
  <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        <h2 id='blu'>Itineraries & tours</h2>
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <h3 id='bl'><b>Plan your trip with a plethora of options to explore the vibrant city’s cultural sites<p>of singapore</p></b></h3>
        </Typography>
      </CardContent>
  </div></form>
  </div>
  </div>
  </div>

  );
}
export default Home;