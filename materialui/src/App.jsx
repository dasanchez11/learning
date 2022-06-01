import React from 'react'
import {Button} from '@material-ui/core';

function App() {
  return (
    <div >
      <Button color='primary' variant='text' disabeledElevation>
        Botoncito
      </Button>
      <Button color='primary' variant='contained' >
        Botoncito
      </Button>
      <Button color='primary' variant='contained' disableElevation >
        Botoncito
      </Button>
    </div>
  );
}

export default App;
