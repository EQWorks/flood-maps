import React, { useState } from 'react'

import { Authenticated } from '@eqworks/common-login'
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
  const [location, setLocation] = useState('')
  const [showBuildings, setShowBuildings] = useState(true)

  return (
    <Authenticated product='locus'>
      <ThemeProvider theme={customTheme}>
        <TopBar />
        <Grid container spacing={2} >
          <Grid item sm={2}>
            <Controls
              setTargetLocation={setLocation}
              setShowMapBuildings={setShowBuildings}
            />
          </Grid>
          <Grid item sm={10}>
            <CompareMap
              location={location}
              showBuildings={showBuildings}
            />
          </Grid>
        </Grid>
      </ThemeProvider>
    </Authenticated>
  )
}

export default App
