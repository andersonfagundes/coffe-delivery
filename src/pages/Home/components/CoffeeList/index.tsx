import { List, ListContainer, OurCoffees } from './styles'
import { CoffeeCard } from '../CoffeeCard'

export function CoffeeList() {
  return (
    <ListContainer>
      <OurCoffees>
        <h2>Our cafes</h2>
      </OurCoffees>
      <List>
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
      </List>
    </ListContainer>
  )
}
