import styled from 'styled-components'
import backgroundImageMainInformation from '../../assets/background-main-information.svg'

export const MainContainer = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-image: url(${backgroundImageMainInformation});
`

export const MainInformation = styled.div`
  width: 36.75rem;
  height: 12rem;
  margin: 94px 0px 108px 160px;
`
export const CoffeInformation = styled.div`
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

export const CoffeDeliveryInfo = styled.div`
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
export const CoffeImageContainer = styled.div`
  margin: 92px 160px 92px 56px;
  width: 29.75rem;
  height: 22.5rem;
`
