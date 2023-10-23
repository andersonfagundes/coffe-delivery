import { HeaderContainer } from './styles'
import logoCoffeDelivery from '../../assets/coffe-delivery-logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoCoffeDelivery} alt="" />
    </HeaderContainer>
  )
}
