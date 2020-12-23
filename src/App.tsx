import React, { useState } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Input from '@material-ui/core/Input';
import PriceDifference from './components/PriceDifference';

const theme = createMuiTheme({
  typography: {
    fontFamily: ['Balsamiq Sans', 'Roboto', 'sans-serif'].join(',')
  },
  overrides: {
    MuiInput: {
      input: {
        textAlign: 'center',
        fontSize: '1.5rem'
      }
    }
  }
})

function App() {
  const [desiredPrice, setDesiredPrice] = useState(0);
  const [offeredPrice, setOfferedPrice] = useState(0);

  const onDesiredChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setDesiredPrice(Number(event.target.value))
  }

  const onOfferedChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setOfferedPrice(Number(event.target.value))
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="App" style={{ textAlign: 'center' }}>
        <Typography variant="h2">Price Negotiator</Typography>

        Enter Desired Price
        <Input
          type="number"
          inputProps={{ min: "0" }}
          onChange={onDesiredChange}></Input>

        <br />
        <br />

        Enter Offered Price
        <Input
          type="number"
          inputProps={{ min: "0" }}
          onChange={onOfferedChange}></Input>

          <br/>
          <br/>
          
          {
            !!(desiredPrice &&  offeredPrice) && (
              <PriceDifference desiredPrice={desiredPrice} offeredPrice={offeredPrice} />
            ) 
          }
          

      </div>
    </ThemeProvider>
  );
}

export default App;
