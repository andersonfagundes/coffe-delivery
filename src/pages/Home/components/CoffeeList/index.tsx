import { List, ListContainer, OurCoffees } from './styles'
import { CoffeeCard } from '../CoffeeCard'
import tradicionalEspresso from '../../../../assets/traditional-espresso.svg'
import {
  AmountDetailsContainer,
  PriceContainer,
  Price,
} from '../CoffeeCard/styles'

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
          </AmountDetailsContainer>
        </CoffeeCard>
      </List>
    </ListContainer>
  )
}
