import styled from 'styled-components'
import backgroundImageMainInformation from '../../assets/background-main-information.svg'

export const MainContainer = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  background-image: url(${backgroundImageMainInformation});
`
export const MainInformationContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 70rem;
  margin: 92px 160px;
`

export const Information = styled.div`
  width: 36.75rem;
  height: 12rem;
`
export const CoffeeInformation = styled.div`
  width: 36.75rem;
  height: 21.37rem;
`

export const CoffeeFinder = styled.div`
  width: 36.75rem;
  height: 7.75rem;
  font-family: 'Baloo 2', sans-serif;
  font-size: 3rem;
  line-height: 130%;
`

export const CoffeeDeliveryInfo = styled.div`
  margin-top: 16px;
  width: 36.75rem;
  height: 3.25rem;
  font-family: 'Roboto', sans-serif;
  font-size: 1.25rem;
  line-height: 130%;
`
export const PurchaseAssurance = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 66px;
  width: 35.43rem;
  height: 5.25rem;
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  line-height: 130%;
  color: ${(props) => props.theme['base-text']};

  ul {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  }

  li {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 5.5px;
    width: 294px;
    list-style: none;
  }
`
export const CoffeeImageContainer = styled.div`
  width: 29.75rem;
  height: 22.5rem;
  margin-top: 2px;
  margin-left: 56px;
`
export const List = styled.div`
  width: 100%;

  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    line-height: 130%;
    margin: 32px 0px 0px 160px;
  }
`
