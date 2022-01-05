import React from 'react'

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { ThemeProvider, createTheme } from '@mui/material/styles'

import EQlogo from './images/eq.png'


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#000000',
    },
  },
  typography: {
    fontFamily: 'Open Sans',
  },
})

const TopBar = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position='static' color='primary' enableColorOnDark sx={{ p: 1 }}>
        <Toolbar>
          <Box>
            <img alt='EQ Logo' src={EQlogo} width={50} height={50} />
          </Box>
          <Typography variant='h5' sx={{ ml: 2, flexGrow: 1 }}>
              EQ Works
          </Typography>
          <Typography variant='h5'>
              British Columbia Flood Maps 2021
          </Typography>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  )
}

export default TopBar
