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
  const [offeredColor, setOfferedColor] = useState('inherit');

  const onDesiredChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setDesiredPrice(Number(event.target.value))
  }

  const onOfferedChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    let offeredPrice = Number(event.target.value)
    setOfferedPrice(offeredPrice)
    let priceDifference = offeredPrice - desiredPrice

    if (priceDifference < 0) {
      setOfferedColor('red')
    }
    else if (priceDifference > 0) {
      setOfferedColor('green')
    }
    else {
      setOfferedColor('black')
    }

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
          style={{color: offeredColor}}
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
