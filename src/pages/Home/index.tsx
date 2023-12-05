import {
  CoffeeDeliveryInfo,
  CoffeeImageContainer,
  CoffeeInformation,
  CoffeeFinder,
  MainContainer,
  Information,
  PurchaseAssurance,
  MainInformationContainer,
} from './styles'
import coffeMainImage from '../../assets/coffe-main-image.svg'
import iconSimpleSafePurchase from '../../assets/icon-simple-and-safe-purchase.svg'
import iconKeepingIntactCoffe from '../../assets/icon-packeges-keeping-intact-coffee.svg'
import iconFastAndTrackedDelivery from '../../assets/icon-fast-and-tracked-delivery.svg'
import iconCoffeArrivesFreshToYou from '../../assets/icon-coffee-arrives-fresh-to-you.svg'
import { CoffeeList } from './components/CoffeeList'

export function Home() {
  return (
    <>
      <MainContainer>
        <MainInformationContainer>
          <Information>
            <CoffeeInformation>
              <CoffeeFinder>
                Find the perfect coffee for any time of day
              </CoffeeFinder>
              <CoffeeDeliveryInfo>
                With Coffee Delivery you receive your coffee wherever you are,
                anytime hour
              </CoffeeDeliveryInfo>
              <PurchaseAssurance>
                <ul>
                  <li>
                    <img src={iconSimpleSafePurchase} alt="" />
                    Simple and safe purchase
                  </li>
                  <li>
                    <img src={iconKeepingIntactCoffe} alt="" />
                    Packaging keeps the coffee intact
                  </li>
                </ul>
                <ul>
                  <li>
                    <img src={iconFastAndTrackedDelivery} alt="" />
                    Fast and tracked delivery
                  </li>
                  <li>
                    <img src={iconCoffeArrivesFreshToYou} alt="" />
                    Coffee arrives fresh to you
                  </li>
                </ul>
              </PurchaseAssurance>
            </CoffeeInformation>
          </Information>
          <CoffeeImageContainer>
            <img src={coffeMainImage} alt="" />
          </CoffeeImageContainer>
        </MainInformationContainer>
      </MainContainer>
      <CoffeeList />
    </>
  )
}
