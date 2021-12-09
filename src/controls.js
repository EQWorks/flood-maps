import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Box from '@mui/material/Box'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Typography from '@mui/material/Typography'
import Switch from '@mui/material/Switch'
import FormControlLabel from '@mui/material/FormControlLabel'
import { alpha, styled } from '@mui/material/styles'

import { LOCATIONS } from './constants'


const CustomSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: '#3887be',
    '&:hover': {
      backgroundColor: alpha('#3887be', theme.palette.action.hoverOpacity),
    },
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: '#3887be',
  },
}))

const Controls = ({ setTargetLocation, setShowMapBuildings }) => {
  const [location, setLocation] = useState('Area map')
  const [showBuildings, setShowBuildings] = useState(true)

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
        > {Object.keys(LOCATIONS).map((loc, i) => (
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
      <FormControlLabel
        value={showBuildings}
        control={<CustomSwitch defaultChecked/>}
        label='Show Buildings'
        labelPlacement='end'
        onChange={() => {
          setShowMapBuildings(!showBuildings)
          setShowBuildings(!showBuildings)
        }}
      />
    </Box>
  )
}

Controls.propTypes = {
  setTargetLocation: PropTypes.func.isRequired,
  setShowMapBuildings: PropTypes.func.isRequired,
}

export default Controls
