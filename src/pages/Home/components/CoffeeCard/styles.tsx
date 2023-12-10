import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 16rem;
  height: 19.37rem;
  border-radius: 6px 36px 6px 36px;
  background: ${(props) => props.theme['base-card']};

  img {
    width: 7.5rem;
    margin: -20px auto 0 auto;
  }

  span {
    font-family: 'Roboto', sans-serif;
    font-size: 0.62rem;
    font-weight: bold;
    background: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
    line-height: 150%;
    width: 81px;
    height: 21px;
    margin-top: 12px;
    padding: 4px 8px;
    border-radius: 100px;
  }

  h3 {
    font-family: 'Baloo 2', sans-serif;
    color: ${(props) => props.theme['base-subtitle']};
    margin-top: 16px;
    font-size: 14px;
    text-align: center;
    line-height: 130%;
    font-weight: bold;
  }

  p {
    font-family: 'Roboto', sans-serif;
    color: ${(props) => props.theme['base-label']};
    font-size: 14px;
    font-weight: normal;
    text-align: center;
    line-height: 130%;
    width: 13.5rem;
    height: 2.25rem;
    margin-top: 8px;
  }
`

export const AmountDetailsContainer = styled.div`
  width: 13rem;
  height: 2.37rem;
  margin: 33px 24px 20px 24px;
`
export const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  font-size: 0.87rem;
  line-height: 130%;
  font-weight: 400;
  color: ${(props) => props.theme['base-text']};
  width: 4.18rem;
  height: 1.93rem;
  margin: 3.5px 0px;
`
export const Price = styled.div`
  font-family: 'Baloo 2';
  color: ${(props) => props.theme['base-text']};
  font-size: 1.5rem;
  line-height: 130%;
  font-weight: 800;
  text-align: right;
`

export const Amount = styled.div``
