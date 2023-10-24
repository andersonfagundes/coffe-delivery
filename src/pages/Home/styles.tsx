import styled from 'styled-components'

export const MainContainer = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid red;

  .div_main_information {
    width: 36.75rem;
    height: 21.37rem;
    margin: 5.87rem 3.5rem 6.75rem 16rem;
    border: 1px solid blue;
  }
  .div_img_coffe {
    width: 29.75rem;
    height: 22.5rem;
    margin: 5.75rem 16rem 5.75rem 0;
  }

  @media (max-width: 480px) {
    .div_main_information {
      margin-left: 1rem;
    }
    .div_img_coffe {
      margin-right: 1rem;
    }
  }

  /*Media query for tablets ipads partrait mode*/
  @media (min-width: 481px) and (max-width: 1024px) {
    .div_main_information {
      margin-left: 1rem;
    }
    .div_img_coffe {
      margin-right: 1rem;
    }
  }
`
