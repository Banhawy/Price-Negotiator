import React from 'react'

export interface IPriceContext {
    desiredPrice: number;
    offeredPrice: number;
}

const PriceContext = React.createContext<IPriceContext>({ desiredPrice: 0, offeredPrice: 0 })

PriceContext.displayName = 'Price Context'

export const PriceProvider = PriceContext.Provider
export const PriceConsumer = PriceContext.Consumer

export default PriceContext