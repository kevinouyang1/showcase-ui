
import { Button, Card, CardBody, Container } from '@chakra-ui/react';
import '../App.css';
import { useState } from 'react';
import SpotifyCard from '../components/SpotifyCard';

function DefaultLayout() {

  const [ openMusic, setMusicOpen ] = useState(false);

  return (
    <div className='App'>
      <div
          style={{
            backgroundImage: 'url(/assets/nekobackground.jpeg)',
            backgroundPosition: `center`,
            backgroundSize: 'cover',
            width: '100%',
            height: '100%',
            position: 'relative'
          }}
      >
        <Button variant='plain' sx={{ height: '20vh', width: '15vw', position: 'absolute',
            top: `43.5%`,
            left: '10%',}} onClick={() => setMusicOpen(!openMusic)}>
          <img src='/assets/IMG_7127.GIF' alt='music-cat'/>
        </Button>
        <Container display={openMusic ? 'block' : 'none'} sx={{position: 'absolute',
            top: `43.5%`,
            left: '20%',}}>
          <Card>
            <CardBody>
              Spotify content
              <SpotifyCard></SpotifyCard>
            </CardBody>
          </Card>
        </Container>
      </div>
    </div>
  );
}

export default DefaultLayout;
