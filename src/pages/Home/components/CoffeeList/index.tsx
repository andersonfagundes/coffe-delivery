import { List, ListContainer, OurCoffees } from './styles'
import { CoffeeCard } from '../CoffeeCard'
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

export function CoffeeList() {
  return (
    <ListContainer>
      <OurCoffees>
        <h2>Our coffees</h2>
      </OurCoffees>
      <List>
        <CoffeeCard>
          <img src={tradicionalEspresso} alt="" />
          <span>Tradicional</span>
          <h3>American Express</h3>
          <p>Traditional coffee made with hot water and ground grains</p>
          <AmountDetailsContainer>
            <PriceContainer>
              R$<Price>9,90</Price>
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
        </CoffeeCard>
      </List>
    </ListContainer>
  )
}
