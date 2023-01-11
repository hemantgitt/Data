import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import SwipeableTextMobileStepper from './Carosuel'
import SpacingGrid from './GridBoxes'
import EnhancedTable from './Table'

 const  SimpleContainer = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      
      <Container maxWidth="sx">
        <SwipeableTextMobileStepper/>
<SpacingGrid/>

      </Container>
      <EnhancedTable/>
    </React.Fragment>
  );
}

export default SimpleContainer