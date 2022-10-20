import { Alert, Grid } from '@mui/material'
import { FC, useMemo, useState } from 'react'

import { GuessForm } from '../../components/GuessForm'
import { Layout } from '../../layouts/default'
import { GuessResult } from '../../models/app'
import { guessRandom } from '../../services/guessService'
import { getRandomInt } from '../../utils/number'
import { Title } from './styles'

interface HomePageProps {}

export const HomePage: FC<HomePageProps> = () => {
  // random size
  const size = useMemo(() => getRandomInt(4, 10), [])
  const seed = useMemo(() => getRandomInt(1, 1000), [])
  const [errorMessage, setErrorMessage] = useState('')
  const [result, setResult] = useState<GuessResult[]>()

  const onSubmit = (value: string) => {
    setErrorMessage('')
    guessRandom({
      guess: value,
      seed,
      size,
    })
      .then((response) => {
        setResult(response?.data || [])
      })
      .catch((err) => {
        setErrorMessage(err?.response?.data || err?.message || 'something went wrong')
      })
  }

  return (
    <Layout>
      <Grid item xs={12}>
        <Title variant="h2" gutterBottom>
          Wordle-like puzzle
        </Title>
      </Grid>
      {errorMessage && (
        <Grid item xs={12} md={6}>
          <Alert severity="error">{errorMessage}</Alert>
        </Grid>
      )}
      <Grid item xs={12}>
        <GuessForm onSubmit={onSubmit} size={size} seed={seed} result={result} />
      </Grid>
    </Layout>
  )
}
