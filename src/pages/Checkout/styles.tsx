import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70rem;
  height: 39.31rem;
  margin: 40px auto 0 auto;
  border: 1px solid gray;
`
export const CompleteYourOrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 39.31rem;
  width: 40rem;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.12rem;
    line-height: 130%;
    font-weight: 700;
  }
`

export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40rem;
  height: 23.25rem;
  margin-top: 15px;
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px;
`

export const Address = styled.div`
  width: 35rem;
  height: 2.75rem;
  border: 1px solid black;
  margin: 40px 40px 0 40px;

  img {
    width: 1.37rem;
    height: 1.37rem;
  }

  span {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
    margin-left: 8px;
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-size: 0.87rem;
    font-weight: 400;
    line-height: 130%;
    color: ${(props) => props.theme['base-text']};
    margin: 2px 0 0 30px;
  }
`

export const AddressData = styled.div`
  width: 35rem;
  height: 13.5rem;
  margin: 32px 40px 40px 40px;
  border: 1px solid black;
`

export const SeletedCoffeesContainer = styled.div`
  height: 33.5rem;
  width: 28rem;
  border: 1px solid red;
`
