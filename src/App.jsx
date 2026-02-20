import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Box,
  Container,
  Paper,
  Collapse
} from '@mui/material';
import { useState } from 'react';
import { RichPersons } from './data.js';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const hasNext = index < RichPersons.length - 1;

  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
      setShowMore(false);
    } else {
      setIndex(0);
    }
  }

  function handleBackClick() {
    if (index > 0) {
      setIndex(index - 1);
      setShowMore(false);
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
      flexDirection: 'column',
      alignItems: 'center',
      p: 2,
      minHeight: '100vh',
      background: 'radial-gradient(circle, rgba(2, 0, 36, 1) 0%, rgba(38, 104, 170, 1) 35%, rgba(33, 46, 105, 1) 100%)',
    }}>
      <Container
        maxWidth="sm" sx={{
          textAlign: 'center',
          mb: 4,
          marginTop: 5,
          fontFamily: 'arial',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>

        <Typography variant="h4" sx={{ color: '#fff', fontWeight: 800 }}>
          Billionaire Boys Club
        </Typography>

        <Paper
          elevation={6}
          sx={{
            p: 3,
            background: 'rgba(255, 255, 255, 0.12)',
            backdropFilter: 'blur(15px)',
            WebkitBackdropFilter: 'blur(15px)',
            borderRadius: 3,
            width: '64%',
            maxWidth: 400,
            mt: 2,
            border: '1px solid rgba(255, 255, 255, 0.3)',
            color: '#fff',
            textAlign: 'center',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Typography variant="h6" sx={{
            fontWeight: 800,
            letterSpacing: 1,
            mb: 0.5
          }}>
            AARON M. LAXAMANA
          </Typography>

          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 2,
            opacity: 0.8
          }}>
            <Typography variant="body2"
              sx={{
                fontWeight: 'bold',
                color: '#00d4ff'
              }}>
              CPEITEL3
            </Typography>
            <Typography variant="body2" sx={{
              borderLeft: '1px solid rgba(255,255,255,0.3)',
              pl: 2
            }}>
              IT-3A
            </Typography>
          </Box>
        </Paper>
      </Container>
      <Card
        sx={{
          maxWidth: '95%',
          width: 400,
          minHeight: 550,
          display: 'flex',
          flexDirection: 'column',
          background: 'rgba(255, 255, 255, 0.15)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: 4,
          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
          position: 'relative',
          pt: 5,
        }}
      >
        <Box sx={{
          position: 'absolute',
          top: 20,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 60,
          height: 15,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          borderRadius: 5,
        }} />
        <Box sx={{ height: 300, bgcolor: 'transparent', p: 2 }}>
          <CardMedia
            component="img"
            sx={{
              height: '100%',
              width: '100%',
              objectFit: 'cover',
              borderRadius: 2,
            }}
            image={Personalities.url}
            alt={Personalities.alt}
          />
        </Box>

        <CardContent sx={{
          flexGrow: 1,
          overflowY: 'auto'
        }}>
          <Typography
            variant="overline"
            display="block" sx={{ color: 'rgba(255, 255, 255, 0.7)', textAlign: 'center', mb: 1 }}>
            Richest People {index + 1} of {RichPersons.length}
          </Typography>

          <Typography
            gutterBottom variant="h5" component="div"
            sx={{ color: '#fff', fontWeight: 'bold', textAlign: 'center' }}>
            {Personalities.name}
          </Typography>

          <Typography variant="subtitle1" sx={{
            color: 'rgba(255, 255, 255, 0.6)',
            mb: 1,
            textAlign: 'center',
          }}>
            {Personalities.Company}
          </Typography>

          <Button
            size="small"
            onClick={handleMoreClick}
            sx={{
              mb: 1,
              p: 0,
              color: '#00d4ff',
              textTransform: 'none',
            }}
          >
            {showMore ? 'Hide' : 'Show'} details
          </Button>

          <Collapse in={showMore} timeout="auto" unmountOnExit>
            <Typography variant="body2" sx={{
              color: '#fff',
              mt: 1,
              textAlign: 'justify',
              opacity: 0.9
            }}>
              {Personalities.description}
            </Typography>
          </Collapse>
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