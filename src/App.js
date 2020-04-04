import React from 'react';
import styled from 'styled-components';

import sounds from './data';
import SoundButton from './Components/SoundButton';

function App() {
  return (
    <Container>
      <Banner alt="Deanrell banner" src='https://scontent-cdg2-1.xx.fbcdn.net/v/t31.0-8/29873190_1662543173831625_7821727117447280315_o.jpg?_nc_cat=100&_nc_sid=e3f864&_nc_ohc=pXN481ZJ6PEAX9qLBy2&_nc_ht=scontent-cdg2-1.xx&oh=4eabddab85c7f6d1da056324960c2a43&oe=5EAF9FB9'/>

      <Grid>
        {sounds.allIds.map(soundId => {
          const sound = sounds.byId[soundId];

          return (
            <div key={sound.id}>
              <SoundButton source={sound.source} color={sound.color}>{sound.label}</SoundButton>
            </div>
          )
        })}
      </Grid>
    </Container>
  );
}

export default App;

const Banner = styled.img`
  width: 100%;
  margin-bottom: 2rem;
`;

const Container = styled.main`
  max-width: 40rem;
  width: 100%;
  margin: auto;
  padding: 0 1rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(9rem, 1fr));
  grid-gap: 1rem;
`;