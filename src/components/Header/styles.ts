import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 6.5rem;

  .logo-coffe-delivery {
    width: 5.3rem;
    height: 2.5rem;
    margin: 2rem 0 2rem 16rem;
  }

  .location-cart {
    width: 193px;
    height: 38px;
    margin: 2rem 16rem 2rem 0;
  }

  /*Media query for resolution phones*/
  @media (max-width: 480px) {
    .logo-coffe-delivery {
      margin: 2rem 0 2rem 1rem;
    }

    .location-cart {
      margin: 2rem 1rem 2rem 0rem;
    }
  }

  /*Media query for tablets ipads partrait mode*/
  @media (min-width: 481px) and (max-width: 1024px) {
    .logo-coffe-delivery {
      margin: 2rem 5rem 1rem;
    }

    .location-cart {
      margin: 2rem 5rem 2rem 0rem;
    }
  }
`
