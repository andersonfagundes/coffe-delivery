import React from 'react'
import PropTypes from 'prop-types'
import { CoffeeCardContainer } from './styles'
import tradicionalEspresso from '../../../../assets/traditional-espresso.svg'
import {
  AmountDetailsContainer,
  PriceContainer,
  Price,
  AmountContainer,
  Cart,
  Amount,
  NegativeSymbolContainer,
  PositiveSymbolContainer,
} from '../CoffeeCard/styles'
import cart from '../../../../assets/cart.svg'
import negativeSymbol from '../../../../assets/icon-negative-symbol.svg'
import positiveSymbol from '../../../../assets/icon-positive-symbol.svg'

interface CoffeeCardProps {
  typeOfCoffee: PropTypes.array.isRequired
  name: string
  marginLeft?: string
  description: string
}
export function CoffeeCard({
  typeOfCoffee,
  name,
  marginLeft,
  description,
}: CoffeeCardProps) {
  return (
    <CoffeeCardContainer style={{ marginLeft }}>
      <img src={tradicionalEspresso} alt="" />
      <div className="type-of-coffee">{typeOfCoffee}</div>
      <h3>{name}</h3>
      <p>{description}</p>
      <AmountDetailsContainer>
        <PriceContainer>
          €<Price>9,90</Price>
        </PriceContainer>
        <AmountContainer>
          <Amount>
            <NegativeSymbolContainer>
              <img src={negativeSymbol} alt="" />
            </NegativeSymbolContainer>
            <input type="text" value="1" />
            <PositiveSymbolContainer>
              <img src={positiveSymbol} alt="" />
            </PositiveSymbolContainer>
          </Amount>
          <Cart>
            <img src={cart} alt="" />
          </Cart>
        </AmountContainer>
      </AmountDetailsContainer>
    </CoffeeCardContainer>
  )
}
