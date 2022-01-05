import React, { useState } from 'react'

import Grid from '@mui/material/Grid'
import { ThemeProvider, createTheme } from '@mui/material/styles'

import TopBar from './top-bar.jsx'
import Controls from './controls.jsx'
import CompareMap from './compare-map.jsx'


const customTheme = createTheme({
  typography: {
    fontFamily: 'Open Sans',
  },
})

const App = () => {
  const [location, setLocation] = useState('')
  const [showBuildings, setShowBuildings] = useState(true)
  const [showFlood, setShowFlood] = useState(true)

  return (
    <ThemeProvider theme={customTheme}>
      <TopBar />
      <Grid container spacing={2} >
        <Grid item sm={2}>
          <Controls
            setTargetLocation={setLocation}
            setShowMapBuildings={setShowBuildings}
            setShowMapFlood={setShowFlood}
          />
        </Grid>
        <Grid item sm={10}>
          <CompareMap
            location={location}
            showBuildings={showBuildings}
            showFlood={showFlood}
          />
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default App
