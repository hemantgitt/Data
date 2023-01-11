import * as React from 'react';
import Grid from '@mui/material/Grid';
// import FormLabel from '@mui/material/FormLabel';
// import FormControl from '@mui/material/FormControl';
// import FormControlLabel from '@mui/material/FormControlLabel';
// // import HighlightedCode from 'docs/src/modules/components/HighlightedCode';
// import RadioGroup from '@mui/material/RadioGroup';
// import Radio from '@mui/material/Radio';
import Paper from '@mui/material/Paper';

 const SpacingGrid = () => {
  const [spacing, setSpacing] = React.useState(2);

//   const handleChange = (event) => {
//     setSpacing(Number(event.target.value));
//   };

  const jsx = `
<Grid container spacing={${spacing}}>
`;

  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={spacing}>
          {[0, 1,3].map((value) => (
            <Grid key={value} item>
            
                
              <Paper
                sx={{
                  height: 340,
                  width: 400,
                  backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? 'black' : '#fff',
                    
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
     
    </Grid>
  );
}

export default SpacingGrid