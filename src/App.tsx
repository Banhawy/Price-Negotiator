import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const theme = createMuiTheme({
  typography: {
    fontFamily: [ 'Balsamiq Sans', 'Roboto', 'sans-serif' ].join(',')
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App" style={{textAlign: 'center'}}>
        <Typography variant="h2">Price Negotiator</Typography> 
      </div>
    </ThemeProvider>
  );
}

export default App;
