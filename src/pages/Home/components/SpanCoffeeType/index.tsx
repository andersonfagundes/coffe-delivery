import React from 'react'
import { CoffeeType } from './styles'

export function SpanCoffeeType({ typeOfCoffee }: { typeOfCoffee: string }) {
  return <CoffeeType>{typeOfCoffee}</CoffeeType>
}
