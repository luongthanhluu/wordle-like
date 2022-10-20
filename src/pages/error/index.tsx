import { FC } from 'react'

interface ErrorPageProps {}

export const ErrorPage: FC<ErrorPageProps> = () => {
  return <div data-testid="message">something went wrong</div>
}
