import axios from 'axios'

interface GuessRandomParams {
  guess: string
  size?: number
  seed: number
}

export const guessRandom = (params: GuessRandomParams) => {
  const url =
    `${process.env.REACT_APP_API_ENDPOINT}/random?` + new URLSearchParams(params as any).toString()
  return axios.get(url).then((data) => {
    return data
  })
}
