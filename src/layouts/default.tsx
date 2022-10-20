import { FC, ReactNode } from 'react'
import { StyledContainer } from './styles'

interface LayoutProps {
  children: ReactNode
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <StyledContainer
      container
      spacing={4}
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      {children}
    </StyledContainer>
  )
}
