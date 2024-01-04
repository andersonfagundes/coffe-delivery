import {
  Address,
  AddressContainer,
  AddressData,
  CompleteYourOrderContainer,
  MainContainer,
  SeletedCoffeesContainer,
} from './styles'
import iconAddress from '../../assets/icon-address.svg'

export function Checkout() {
  return (
    <MainContainer>
      <CompleteYourOrderContainer>
        <h1>Complete your order</h1>
        <AddressContainer>
          <Address>
            <img src={iconAddress} alt="" />
            <span>Delivery address</span>
            <p>Enter the address where you would like to receive your order</p>
          </Address>
          <AddressData></AddressData>
        </AddressContainer>
      </CompleteYourOrderContainer>
      <SeletedCoffeesContainer></SeletedCoffeesContainer>
    </MainContainer>
  )
}
