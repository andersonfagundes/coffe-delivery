import { List, ListContainer, OurCoffees } from './styles'
import { CoffeeCard } from '../CoffeeCard'
import { CoffeeType } from '../CoffeeType'

export function CoffeeList() {
  const tradicionalCoffeeComponent = <CoffeeType coffeeType="TRADICIONAL" />
  const coffeWithMilkComponent = <CoffeeType coffeeType="WITH MILK" />
  const specialCoffeeComponent = <CoffeeType coffeeType="SPECIAL" />
  const icedCoffeeComponent = <CoffeeType coffeeType="ICED" />
  const alcoholicCoffeeComponent = <CoffeeType coffeeType="ALCOHOLIC" />

  return (
    <ListContainer>
      <OurCoffees>
        <h2>Our coffees</h2>
      </OurCoffees>
      <List>
        <CoffeeCard
          typeOfCoffee={[tradicionalCoffeeComponent]}
          name="Traditional Espresso"
          description="Traditional coffee made with hot water and ground grains"
        />
        <CoffeeCard
          typeOfCoffee={[tradicionalCoffeeComponent]}
          name="American Expresso"
          marginLeft="32px"
          description="Diluted espresso, less intense than the traditional one"
        />
        <CoffeeCard
          typeOfCoffee={[tradicionalCoffeeComponent]}
          name="Creamy espresso"
          marginLeft="32px"
          description="Traditional espresso with creamy foam"
        />
        <CoffeeCard
          typeOfCoffee={[tradicionalCoffeeComponent, icedCoffeeComponent]}
          name="Iced Espresso"
          marginLeft="32px"
          description="Drink prepared with espresso and ice cubes"
        />
        <CoffeeCard
          typeOfCoffee={[tradicionalCoffeeComponent, coffeWithMilkComponent]}
          name="Coffee with Milk"
          description="Half and half of traditional espresso with steamed milk"
        />
        <CoffeeCard
          typeOfCoffee={[tradicionalCoffeeComponent, coffeWithMilkComponent]}
          name="Latte"
          marginLeft="32px"
          description="A shot of espresso with twice the amount of milk and creamy foam"
        />
        <CoffeeCard
          typeOfCoffee={[tradicionalCoffeeComponent, coffeWithMilkComponent]}
          name="Cappuccino"
          marginLeft="32px"
          description="Drink with cinnamon made from equal parts of coffee, milk, and foam"
        />
        <CoffeeCard
          typeOfCoffee={[tradicionalCoffeeComponent, coffeWithMilkComponent]}
          name="Macchiato"
          marginLeft="32px"
          description="Espresso mixed with a bit of hot milk and foam"
        />
        <CoffeeCard
          typeOfCoffee={[tradicionalCoffeeComponent, coffeWithMilkComponent]}
          name="Mochaccino"
          description="Espresso with chocolate syrup, a little milk, and foam"
        />
        <CoffeeCard
          typeOfCoffee={[specialCoffeeComponent, coffeWithMilkComponent]}
          name="Hot Chocolate"
          marginLeft="32px"
          description="Drink made with chocolate dissolved in hot milk and coffee"
        />
        <CoffeeCard
          typeOfCoffee={[
            specialCoffeeComponent,
            alcoholicCoffeeComponent,
            icedCoffeeComponent,
          ]}
          name="Cuban"
          marginLeft="32px"
          description="Iced espresso drink with rum, cream, and mint"
        />
        <CoffeeCard
          typeOfCoffee={[specialCoffeeComponent]}
          name="Hawaiian"
          marginLeft="32px"
          description="Sweetened drink prepared with coffee and coconut milk"
        />
        <CoffeeCard
          typeOfCoffee={[specialCoffeeComponent]}
          name="Arabic"
          description="Drink prepared with Arabica coffee beans and spices"
        />
        <CoffeeCard
          typeOfCoffee={[specialCoffeeComponent, alcoholicCoffeeComponent]}
          name="Irish"
          marginLeft="32px"
          description="Drink made with coffee, Irish whiskey, sugar, and whipped cream"
        />
      </List>
    </ListContainer>
  )
}
