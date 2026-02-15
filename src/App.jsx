// MATERIAL UI 
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// REACT
import { useState } from 'react';
import { RichPersons } from './data.js';


export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const hasNext = index < RichPersons.length - 1;

  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  function handleBackClick() {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(RichPersons.length - 1);
    }
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let Personalities = RichPersons[index];

  return (
    <Box sx={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      p: 2, 
      minHeight: '100vh', 
      background: 'radial-gradient(circle, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 35%, rgba(0, 212, 255, 1) 100%)',
    }}>
      <Card
        sx={{
          width: 400,
          height: 620,
          display: 'flex',
          flexDirection: 'column',
          //GLASS EFFECT
          background: 'rgba(255, 255, 255, 0.15)', 
          backdropFilter: 'blur(10px)',           
          WebkitBackdropFilter: 'blur(10px)',     
          border: '1px solid rgba(255, 255, 255, 0.2)', 
          borderRadius: 4,                        
          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',

        }}
      >
        {/* IMAGE SECTION*/}
        <Box sx={{ height: 300, bgcolor: 'transparent' }}>
          <CardMedia
            component="img"
            sx={{
              height: '100%',
              width: '100%',
              objectFit: 'cover'
            }}
            image={Personalities.url}
            alt={Personalities.alt}
          />
        </Box>

        {/* CONTENT SECTION */}
        <CardContent sx={{ flexGrow: 1, overflowY: 'auto' }}>
          <Typography variant="overline" display="block" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
            Richest People {index + 1} of {RichPersons.length}
          </Typography>

          <Typography gutterBottom variant="h5" component="div" sx={{ color: '#fff', fontWeight: 'bold' }}>
            {Personalities.name}
          </Typography>

          <Typography variant="subtitle1" sx={{ color: 'rgba(255, 255, 255, 0.6)', mb: 1 }}>
            {Personalities.artist}
          </Typography>

          <Button
            size="small"
            onClick={handleMoreClick}
            sx={{ mb: 1, p: 0, color: '#00d4ff', textTransform: 'none' }}
          >
            {showMore ? 'Hide' : 'Show'} details
          </Button>

          {showMore && (
            <Typography variant="body2" sx={{ color: '#fff', mt: 1, textAlign: 'justify', opacity: 0.9 }}>
              {Personalities.description}
            </Typography>
          )}
        </CardContent>

        <CardActions sx={{ 
          justifyContent: 'space-between', 
          px: 2, 
          pb: 2, 
          borderTop: '1px solid rgba(255, 255, 255, 0.1)' 
        }}>
          <Button 
            variant="outlined" 
            onClick={handleBackClick}
            sx={{ color: '#fff', borderColor: 'rgba(255, 255, 255, 0.5)', '&:hover': { borderColor: '#fff' } }}
          >
            Back
          </Button>
          <Button 
            variant="contained" 
            onClick={handleNextClick}
            sx={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.2)', 
              color: '#fff',
              '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.3)' } 
            }}
          >
            Next
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}