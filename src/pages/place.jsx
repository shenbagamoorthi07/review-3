import React, {useState} from 'react'

import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { CardActionArea } from '@mui/material';
import {Link,useNavigate} from 'react-router-dom';
import {Stack,Box} from '@mui/material';


export default function Place() {

   

    
    return (
        <div>
          <div>
           <center id=''><br></br>
      <h2><b>Must Visit Destinations</b></h2>
      
      <hr />
    </center>
 

        
        
        <Stack direction="row" spacing={2}>
            <div>
        <Box>
    <CardActionArea sx={{ maxWidth: 345 }} id='sab8' >
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/d7/53/1f/caption.jpg?w=1200&h=-1&s=1"
       />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Marinas • Bodies of Water
        </Typography>
        <Rating name="half-rating-read" defaultValue={4} precision={4} readOnly />
        <Typography variant="body2" color="text.secondary">
        Marina Bay is a bay located in the of Central Area of business Singapore surrounded by the perimeters of the four different areas. The entire area surrounding the bay itself is an extension of reclaimed land to the adjacent of the CBD (Central Business District).

        </Typography>
      </CardContent>
      <CardActions >
      </CardActions>
    </CardActionArea>

            </Box>
            </div>
            <div>
        <Box>
    <CardActionArea sx={{ maxWidth: 345 }} id='sab8' >
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/ef/a4/41/cloud-forest.jpg?w=1200&h=-1&s=1"
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        cloud forest
        </Typography>
        <Rating name="half-rating-read" defaultValue={3} precision={3} readOnly />
        <Typography variant="body2" color="text.secondary">
        The Cloud Mountain itself is an intricate structure completely with a lot of flora n fauna such as orchids, ferns, peacock ferns, antheriums, etc. It has a number of levels, each with a different theme like the Lost World, the Cavern, Waterfall View, Crystal Mountain, Cloud Forest Gallery, Cloud Forest Theatre and Secret Garden.

        </Typography>
      </CardContent>
      <CardActions >
     
      </CardActions>
    </CardActionArea>

            </Box>
            </div>
            <div>
        <Box>
    <CardActionArea sx={{ maxWidth: 345 }} id='sab8' >
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/d7/04/df/singapore-zoo.jpg?w=1200&h=-1&s=1"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        singapore zoo
        </Typography>
        <Rating name="half-rating-read" defaultValue={5} precision={5} readOnly />
        <Typography variant="body2" color="text.secondary">
        the Singapore Zoo is the best zoo in Southeast Asia, and probably the best anywhere for Southeast Asian fauna. Visitors will see its remarkable Asian jungle animals as they walk through an Asian jungle, without walls or cages cutting across their line of sight. 
      </Typography>
      </CardContent>
      <CardActions >
     
      </CardActions>
    </CardActionArea>

            </Box>
            </div>
            
        </Stack>
   
        <Stack direction="row" spacing={2}>
            <div>
        <Box>
    <CardActionArea sx={{ maxWidth: 345 }} id='sab8' >
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/2c/fd/73/img-20190908-153849-largejpg.jpg?w=1200&h=-1&s=1"
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        National Orchid Garden
        </Typography>
        <Rating name="half-rating-read" defaultValue={4} precision={4} readOnly />
        <Typography variant="body2" color="text.secondary">
        It’s good to go early in the morning when the tour buses have not arrived. Otherwise the National Orchid Gardens can be pretty crowded. Around 9 am in the morning is about right. It’s still cool and fairly quiet, almost like having the place entirely to oneself. 
        </Typography>
      </CardContent>
      <CardActions >
    
      </CardActions>
    </CardActionArea>

            </Box>
            </div>
            <div>
        <Box>
    <CardActionArea sx={{ maxWidth: 345 }} id='sab8' >
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/7f/e5/ce/beautiful-botanic-gardens.jpg?w=700&h=-1&s=1"
       />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Singapore Botanic Gardens
        </Typography>
        <Rating name="half-rating-read" defaultValue={3} precision={3} readOnly />
        <Typography variant="body2" color="text.secondary">
        this attraction is a well-maintained assortment of gardens worth taking a stroll through - and which will cost you nothing! There is a large pond with swans in it, and back in those days when I was schooling, monkeys also used to roam the place!
        </Typography>
      </CardContent>
      <CardActions >
      
      </CardActions>
    </CardActionArea>

            </Box>
            </div>
            <div>
        <Box>
    <CardActionArea sx={{ maxWidth: 345 }} id='sab8' >
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/be/b0/31/gardens-by-the-bay.jpg?w=1000&h=-1&s=1"
       />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Gardens by the Bay
        </Typography>
        <Rating name="half-rating-read" defaultValue={3} precision={3} readOnly />
        <Typography variant="body2" color="text.secondary">
        Consisting of two futuristic dome (conservatories) and a giant steel supertree "forest", the Gardens by the Bay is a new attraction in Singapore. You can catch a taxi or bus (Service 400) or take a short walk through Marina Bay Sands after getting off from the subway (Bayfront Station).
        </Typography>
        
      </CardContent>
      <CardActions >
     
      </CardActions>
    </CardActionArea>

            </Box>
            </div>
            
        </Stack>
        </div>
        </div>
        
    )
}