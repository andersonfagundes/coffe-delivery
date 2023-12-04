import { HeaderContainer, LogoContainer } from './styles'
import logoCoffeDelivery from '../../assets/coffe-delivery-logo.svg'
import locationCart from '../../assets/location-cart.svg'

export function Header() {
  return (
    <HeaderContainer>
      <LogoContainer>
        <img src={logoCoffeDelivery} className="coffe-delivery-logo" alt="" />
        <img src={locationCart} className="location-cart" alt="" />
      </LogoContainer>
    </HeaderContainer>
  )
}
