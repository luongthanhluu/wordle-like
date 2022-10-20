import { Box, Grid, Button } from '@mui/material'
import { FC, FormEventHandler, useState } from 'react'
import { GuessResult } from '../../models/app'
import { GuessInput } from '../GuessInput'

interface GuessFormProps {
  onSubmit: (value: string) => void
  size: number
  seed: number
  result?: GuessResult[]
}

export const GuessForm: FC<GuessFormProps> = ({ onSubmit, size, result }) => {
  const [guess, setGuess] = useState(() => {
    const value = []
    for (let i = 0; i < size; i++) {
      value.push('')
    }
    return value
  })

  const onClickSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
    onSubmit(guess.join(''))
  }

  const onGuessItemChanged = (key: number, value: string) => {
    const newGuess = [...guess]
    newGuess[key] = value
    setGuess(newGuess)
  }

  const renderGuessItem = () => {
    return guess.map((value, index) => (
      <GuessInput
        key={index}
        index={index}
        value={value}
        setValue={onGuessItemChanged}
        defaultStatus={result?.[index]?.result}
      />
    ))
  }

  return (
    <Box component="form" onSubmit={onClickSubmit}>
      <Grid container direction="row" justifyContent="center" alignItems="center" spacing={2}>
        {renderGuessItem()}
        <Grid item xs={12} paddingTop={2}>
          <Box textAlign="center">
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
