import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import './App.css';

function App() {
  const mappings = [
    {
      western: 'C#',
      carnatic: 'ri1'
    },
    {
      western: 'D#',
      carnatic: 'ga1'
    },
    {
      western: 'F#',
      carnatic: 'Ma2'
    },
    {
      western: 'A#',
      carnatic: 'ni1'
    },
    {
      western: 'G#',
      carnatic: 'da1'
    },
    {
      western: 'C',
      carnatic: 'Sa'
    },
    {
      western: 'D',
      carnatic: 'Ri'
    },
    {
      western: 'E',
      carnatic: 'Ga'
    },
    {
      western: 'F',
      carnatic: 'Ma'
    },
    
    {
      western: 'G',
      carnatic: 'Pa'
    },
    {
      western: 'A',
      carnatic: 'Da'
    },
    {
      western: 'B',
      carnatic: 'Ni'
    },
  ]
  const [westernText, setWesternText] = React.useState('G A G F E F G');
  const [carnaticText, setCarnaticText] = React.useState('');
  const onWesternNotesChange = event => {
    setWesternText(event.target.value);
  };
  // Poor algorithm. Will work on this.
  const onConvert = () => {
    let notesToConvert = westernText;
    mappings.forEach((mapping) => {
      notesToConvert = notesToConvert.replace(new RegExp(mapping.western, "g"), mapping.carnatic);
    });
    setCarnaticText(notesToConvert);
  };
  return (
    <div className="App">
      <TextField
          id="notes"
          label="Multiline"
          value={westernText}
          multiline
          rowsMax="4"
          onChange={onWesternNotesChange}
          margin="normal"
          variant="filled"
        />
      <Button variant="contained" color="primary" onClick={onConvert}>
        Convert
      </Button>
      <Typography variant="h6" gutterBottom>
        {carnaticText}
      </Typography>
    </div>
  );
}

export default App;
