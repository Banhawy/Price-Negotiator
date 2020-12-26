import React, { useState } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Container, Typography } from '@material-ui/core';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import PriceDifference from './components/PriceDifference';
import PriceContext, { IPriceContext } from './PriceContext'
import SuggestedInflationGrid from './components/SuggestedInflationGrid';

const theme = createMuiTheme({
  typography: {
    fontFamily: ['Balsamiq Sans', 'Roboto', 'sans-serif'].join(',')
  },
  overrides: {
    MuiOutlinedInput: {
      input: {
        textAlign: 'center',
        fontSize: '1.5rem'
      },
      focused: {
        color: 'black'
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
        <Container maxWidth="md">
          <div className="App" style={{ textAlign: 'center' }}>
            <Typography variant="h2">Price Negotiator</Typography>

            <div style={{ border: '3px solid', borderRadius: '8px', padding: '1rem' }}>
              <Typography variant="h5">
                Enter Desired Price
                <OutlinedInput
                  type="number"
                  inputProps={{ min: "0" }}
                  style={{ marginLeft: '2rem' }}
                  onChange={onDesiredChange}></OutlinedInput>
              </Typography>


              <br />
              <br />

              <Typography variant="h5">
                Enter Offered Price
              <OutlinedInput
                  type="number"
                  inputProps={{ min: "0" }}
                  style={{ color: offeredColor, marginLeft: '2rem' }}
                  onChange={onOfferedChange}></OutlinedInput>
              </Typography>

            </div>

            <br />
            <br />
            {
              !!(desiredPrice && offeredPrice) && (
                <div>
                  <PriceDifference />
                  <SuggestedInflationGrid />
                </div>
              )
            }
          </div>
        </Container>
      </PriceContext.Provider>
    </ThemeProvider>
  );
}

export default App;
