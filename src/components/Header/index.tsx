import { HeaderContainer } from './styles'
import logoCoffeDelivery from '../../assets/coffe-delivery-logo.svg'
import locationCart from '../../assets/location-cart.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoCoffeDelivery} className="logo-coffe-delivery" alt="" />
      <img src={locationCart} className="location-cart" alt="" />
    </HeaderContainer>
  )
}
