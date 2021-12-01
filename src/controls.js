import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Box from '@mui/material/Box'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Typography from '@mui/material/Typography'

import { locations } from './constants'


const Controls = ({ setTargetLocation }) => {
  const [location, setLocation] = useState('Area map')

  return (
    <Box sx={{ margin: '20px' }}
    >
      <Typography variant='subtitle1' sx={{ marginBottom: '5px' }}>Location</Typography>
      <FormControl fullWidth>
        <Select
          labelId='location-label'
          id='location-select'
          value={location}
          onChange={({ target: { value } }) => {
            setTargetLocation(value)
            setLocation(value)
          }}
          sx={{ marginBottom: '20px' }}
        > {Object.keys(locations).map((loc, i) => (
            <MenuItem key={i} value={loc}>{loc}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <Typography variant='subtitle1' sx={{ marginBottom: '5px' }}>Before date</Typography>
      <FormControl fullWidth>
        <Select
          labelId='before-date-label'
          id='before-date-select'
          value ='Monday, November 8'
          // onChange={handleChange}
          sx={{ marginBottom: '20px' }}
        >
          <MenuItem value='Monday, November 8'>Monday, November 8</MenuItem>
        </Select>
      </FormControl>
      <Typography variant='subtitle1' sx={{ marginBottom: '5px' }}>After date</Typography>
      <FormControl fullWidth>
        <Select
          labelId='after-date-label'
          id='after-date-select'
          value='Friday, November 19'
          // onChange={handleChange}
          sx={{ marginBottom: '20px' }}
        >
          <MenuItem value='Friday, November 19'>Friday, November 19</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}

Controls.propTypes = {
  setTargetLocation: PropTypes.func.isRequired,
}

export default Controls
