import { CoffeeCardContainer } from './styles'

interface CoffeeCardProps {
  children: React.ReactNode
}

export function CoffeeCard({ children }: CoffeeCardProps) {
  return <CoffeeCardContainer>{children}</CoffeeCardContainer>
}
