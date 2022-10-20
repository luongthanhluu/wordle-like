import { ThemeProvider } from '@mui/material'

import { Router } from './routers'
import { theme } from './themes/default'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  )
}

export default App
