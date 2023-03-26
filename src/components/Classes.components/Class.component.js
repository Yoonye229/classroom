import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Class (){
    const cardsValue =[
        {
        image: '../img/image1.png',
        title: 'title 1',
        content: 'super content 1',
        },
        {
        image: '../img/image2.png',
        title: 'title 2',
        content: 'super content 2'
        },
        {
        image: '../img/image-3.png',
        title: 'title3',
        content: 'Lizards are a widespread group of squamate reptiles, with over 6,000species, ranging across all continents except Antarctica'
        },
    ]
    return(
    <>
    {cardsValue.map(item => {
        <Card sx={{ maxWidth: 345 }}>
        
        <CardMedia
          sx={{ height: 140 }}
          image={item.image}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.content}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card> 
    })}
      
    </>
    )
}


