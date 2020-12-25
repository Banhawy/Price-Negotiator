import React, { useEffect, useState } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Input from '@material-ui/core/Input';
import PriceDifference from './components/PriceDifference';
import PriceContext, { IPriceContext } from './PriceContext'

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

  const priceContext: IPriceContext = { desiredPrice, offeredPrice }

  const onDesiredChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setDesiredPrice(Number(event.target.value))
  }

  const onOfferedChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    let offeredPrice = Number(event.target.value)
    let priceDifference = offeredPrice - desiredPrice
    
    setOfferedPrice(offeredPrice)
    
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
      <PriceContext.Provider value={priceContext}>
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
            style={{ color: offeredColor }}
            onChange={onOfferedChange}></Input>

          <br />
          <br />

          <PriceDifference />


        </div>
      </PriceContext.Provider>
    </ThemeProvider>
  );
}

export default App;
