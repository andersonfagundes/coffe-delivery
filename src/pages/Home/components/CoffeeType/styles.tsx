import styled from 'styled-components'

export const SpanCoffeeType = styled.span`
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
`
