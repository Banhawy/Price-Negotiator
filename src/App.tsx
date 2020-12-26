import React, { useState } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Container, Typography } from '@material-ui/core';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import PriceDifference from './components/PriceDifference';
import PriceContext, { IPriceContext } from './PriceContext'
import SuggestedInflationGrid from './components/SuggestedInflationGrid';
import NumberFormat from 'react-number-format';

const theme = createMuiTheme({
  typography: {
    fontFamily: ['Balsamiq Sans', 'Roboto', 'sans-serif'].join(',')
  },
  overrides: {
    MuiOutlinedInput: {
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

  const onOfferedChange = (price: number) => {
    let offeredPrice = price
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
                  <NumberFormat customInput={OutlinedInput} 
                    value={desiredPrice}
                    thousandSeparator={true}
                    allowNegative={false}
                    style={{ marginLeft: '2rem' }}
                    onValueChange={(values) => {
                      setDesiredPrice(Number(values.value))
                    }}/>
              </Typography>


              <br />
              <br />

              <Typography variant="h5">
                Enter Offered Price
                <NumberFormat customInput={OutlinedInput} 
                    value={offeredPrice}
                    thousandSeparator={true}
                    allowNegative={false}
                    style={{ marginLeft: '2rem', color: offeredColor }}
                    onValueChange={(values) => {
                      onOfferedChange(Number(values.value))
                    }}/>
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
