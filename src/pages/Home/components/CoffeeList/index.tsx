import { CoffeeCard, CoffeeListContainer, List } from './styles'

export function CoffeeList() {
  return (
    <CoffeeListContainer>
      <h2>Our cafes</h2>
      <List>
        <CoffeeCard></CoffeeCard>
        <CoffeeCard></CoffeeCard>
        <CoffeeCard></CoffeeCard>
        <CoffeeCard></CoffeeCard>
      </List>
    </CoffeeListContainer>
  )
}
