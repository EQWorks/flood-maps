import React from 'react'

import Box from '@mui/material/Box'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Typography from '@mui/material/Typography'


const Controls = () => {
  return (
    <Box sx={{ margin: '20px' }}
    >
      <Typography variant='subtitle1' sx={{ marginBottom: '5px' }}>Location</Typography>
      <FormControl fullWidth>
        <Select
          labelId='location-label'
          id='location-select'
          // value={location}
          // onChange={handleChange}
          sx={{ marginBottom: '20px' }}
        >
          <MenuItem value='Abbotsford'>Abbotsford</MenuItem>
          <MenuItem value='Chilliwack'>Chilliwack</MenuItem>
        </Select>
      </FormControl>
      <Typography variant='subtitle1' sx={{ marginBottom: '5px' }}>Before date</Typography>
      <FormControl fullWidth>
        <Select
          labelId='before-date-label'
          id='before-date-select'
          // value={beforeDate}
          // onChange={handleChange}
          sx={{ marginBottom: '20px' }}
        >
          <MenuItem value='Friday, November 12'>Friday, November 12</MenuItem>
        </Select>
      </FormControl>
      <Typography variant='subtitle1' sx={{ marginBottom: '5px' }}>After date</Typography>
      <FormControl fullWidth>
        <Select
          labelId='after-date-label'
          id='after-date-select'
          // value={afterDate}
          // onChange={handleChange}
          sx={{ marginBottom: '20px' }}
        >
          <MenuItem value='Sunday, November 14'>Sunday, November 14</MenuItem>
          <MenuItem value='Monday, November 15'>Monday, November 15</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}

export default Controls
