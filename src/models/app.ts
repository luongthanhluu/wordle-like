export interface GuessFormValues {
  guess: string
  seed: number
}
export interface GuessResult {
  guess: string
  result: GuessStatus
  slot: number
}

export enum GuessStatus {
  Absent = 'absent',
  Correct = 'correct',
}
