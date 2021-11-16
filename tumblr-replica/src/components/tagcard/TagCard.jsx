import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function TagCard() {
  const buttonst = {
    width: '50%',
    color: '#122943',
  };
  const cardColor = {
    backgroundColor: '#122943',
    color: 'white',
  };
  return (
    <Card sx={{ maxWidth: 345 }} style={cardColor}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://www.ukrgate.com/eng/wp-content/uploads/2021/02/The-Ukrainian-Book-Institute-Purchases-380.9-Thousand-Books-for-Public-Libraries1.jpeg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          #funny memes
        </Typography>
        <Typography variant="body2" sx={{ fontWeight: 'bold' }} color="text.dark">
          58k  followers
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" size="large" style={buttonst}>follow</Button>
        <Button variant="contained" size="large" style={buttonst}>New post</Button>
      </CardActions>
    </Card>
  );
}
