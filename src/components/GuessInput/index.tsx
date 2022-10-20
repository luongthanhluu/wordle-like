import { KeyboardEvent, FC, useState, useEffect } from 'react'
import { GuessStatus } from '../../models/app'
import { StyledInput } from './styles'

interface GuessInputProps {
  defaultStatus?: GuessStatus
  value: string
  index: number
  setValue: (key: number, value: string) => void
}

export const GuessInput: FC<GuessInputProps> = ({ defaultStatus, index, setValue, value }) => {
  const [status, setStatus] = useState(defaultStatus || '')

  useEffect(() => {
    if (!defaultStatus) {
      return
    }
    setStatus(defaultStatus)
  }, [defaultStatus])

  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (status === GuessStatus.Correct) {
      return
    }
    setValue(index, event.key)
    setStatus('')
  }

  return (
    <StyledInput
      type={status}
      onKeyDown={onKeyDown}
      value={value}
      readOnly
      data-testid="input-guess"
    />
  )
}
