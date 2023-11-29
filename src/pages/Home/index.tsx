import {
  CoffeDeliveryInfo,
  CoffeImageContainer,
  CoffeeFinder,
  MainContainer,
  MainInformation,
} from './styles'
import coffeMainImage from '../../assets/coffe-main-image.svg'

export function Home() {
  return (
    <MainContainer>
      <MainInformation>
        <CoffeeFinder>
          Encontre o café perfeito para qualquer hora do dia
        </CoffeeFinder>
        <CoffeDeliveryInfo>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </CoffeDeliveryInfo>
      </MainInformation>
      <CoffeImageContainer>
        <img src={coffeMainImage} alt="" />
      </CoffeImageContainer>
    </MainContainer>
  )
}
