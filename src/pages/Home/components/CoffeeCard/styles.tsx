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
  margin-bottom: 40px;

  img {
    width: 7.5rem;
    margin: -20px auto 0 auto;
  }

  .type-of-coffee {
    /* border: 1px solid green; */
  }

  span {
    font-family: 'Roboto', sans-serif;
    font-size: 0.62rem;
    font-weight: 700;
    text-align: center;
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
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 130%;
    text-align: center;
    color: ${(props) => props.theme['base-subtitle']};
    margin-top: 16px;
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
  display: flex;
  justify-content: space-between;
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

export const AmountContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 7.37rem;
  height: 2.37rem;
`

export const Amount = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 4.5rem;
  height: 2.37rem;
  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;

  input {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400 700;
    line-height: 130%;
    text-align: center;
    width: 1.25rem;
    height: 1.31rem;
    border: none;
    outline: none;
    background: ${(props) => props.theme['base-button']};
  }
`

export const NegativeSymbolContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 0.87rem;
  height: 0.87rem;

  img {
    width: 0.68rem;
    height: 1rem;
    cursor: pointer;
    margin: 0 auto;
  }
`

export const PositiveSymbolContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 0.87rem;
  height: 0.87rem;

  img {
    cursor: pointer;
    margin: 0 auto;
  }
`

export const Cart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.37rem;
  height: 2.37rem;
  background: ${(props) => props.theme['purple-dark']};
  border-radius: 6px;
  cursor: pointer;

  img {
    width: 1.37rem;
    height: 1.37rem;
    margin: 0 auto;
  }
`
