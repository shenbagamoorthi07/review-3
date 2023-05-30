import '../components/singapore.css';
import {Link,useNavigate} from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Stack,Box} from '@mui/material';
import singapore from './images/singapore.jpg.jpg';
import { CardMedia } from "@mui/material";


const Chennai=()=>{
    const navigate=useNavigate();

    const gotocab =()=>{
        navigate('/cab');
    }
    const gotofood =()=>{
        navigate('/food');
    }
    const gotohotel =()=>{
        navigate('/hotel');
    }
    const gotoplace =()=>{
        navigate('/place');
    }
  
    return(
       <div className="singaporebg">
         <CardMedia component="img" image={singapore} className="singaporebg"></CardMedia>
        <Link to="/Vikie" id='kr'><ArrowBackIcon/></Link>
            <Stack direction="row">
                <Box flex={1} sx={{height:'500px'}}><button onClick={gotocab} id='btn1'>Cab</button></Box>
                <Box flex={1} sx={{height:'500px'}}><button onClick={gotofood} id='btn2'>Food</button></Box>
            </Stack>
            <Stack direction="row">
                <Box flex={1} sx={{height:'500px'}}><button onClick={gotohotel} id='btn3'>Hotel</button></Box>
                <Box flex={1} sx={{height:'500px'}}><button  onClick={gotoplace} id='btn4'>Places</button></Box>
            </Stack>
       </div>
    )
}
export default Chennai;