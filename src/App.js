import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import useSound from 'use-sound';

import sounds from './data';
import SoundButton from './Components/SoundButton';
import SoundOffIcon from './Icons/SoundOff';
import SoundOnIcon from './Icons/SoundOn';
import {getPublicPath} from './utils';

function App() {
  const [play, {stop, isPlaying}] = useSound(getPublicPath('sounds/background-music.mp3'), { volume: 0.1 });
  const [hasBgMusic, setHasBgMusic] = useState(true);

  useEffect(() => {
    if (hasBgMusic) {
      play();
    } else {
      stop();
    }
  }, [hasBgMusic, play, stop]);

  const handleClick = () => {
    setHasBgMusic(!hasBgMusic);
  }


  return (
    <Container>
      <Banner alt="Deanrell banner" src='https://scontent-cdg2-1.xx.fbcdn.net/v/t31.0-8/29873190_1662543173831625_7821727117447280315_o.jpg?_nc_cat=100&_nc_sid=e3f864&_nc_ohc=pXN481ZJ6PEAX9qLBy2&_nc_ht=scontent-cdg2-1.xx&oh=4eabddab85c7f6d1da056324960c2a43&oe=5EAF9FB9'/>

      <MuteWrapper>
        <MuteBtn onClick={handleClick}>
          {isPlaying && <SoundOnIcon height={20}/>}
          {!isPlaying && <SoundOffIcon height={20}/>}
        </MuteBtn>
      </MuteWrapper>

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

      <Credit>
        Réalisé par <a target="_blank" href="https://twitter.com/thevalarai">@TheValarai</a> & <a target="_blank" href="https://twitter.com/stucklogo">@stuckLogo</a><br/>
        <small><a target="_blank" href="https://github.com/LoicGoyet/deanrell-soundbox">Le code source est disponible ici</a></small>
      </Credit>
    </Container>
  );
}

export default App;

const Banner = styled.img`
  width: 100%;
  margin-bottom: 1rem;
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

const MuteWrapper = styled.div`
  text-align: left;
  margin-bottom: 2rem;
`;

const MuteBtn = styled.button`
  background-color: transparent;
  border: 0;
  color: currentColor;
`;

const Credit = styled.p`
text-shadow: none;
`