import React from 'react';

import sounds from './data';
import SoundButton from './Components/SoundButton';

function App() {
  return (
    <div>
      {sounds.allIds.map(soundId => {
        const sound = sounds.byId[soundId];

        return (
          <div>
            <SoundButton source={sound.source}/>
            {sound.label}
          </div>
        )
      })}
    </div>
  );
}

export default App;
