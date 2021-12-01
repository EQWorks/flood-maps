import React from 'react'

import Grid from '@mui/material/Grid'
import { ThemeProvider, createTheme } from '@mui/material/styles'

import TopBar from './top-bar'
import Controls from './controls'
import CompareMap from './compare-map'


const customTheme = createTheme({
  typography: {
    fontFamily: 'Open Sans',
  },
})

const App = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <TopBar />
      <Grid container spacing={2} >
        <Grid item sm={2}>
          <Controls />
        </Grid>
        <Grid item sm={10}>
          <CompareMap />
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default App
