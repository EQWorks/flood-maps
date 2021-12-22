import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { DropdownSelect, Icons, SwitchRound, makeStyles } from '@eqworks/lumen-labs'

import { LOCATIONS } from './constants'


const locationData = [{
  items: Object.keys(LOCATIONS).map(item => ({ title: item })),
}]

const classes = makeStyles({
  date: { color: 'rgba(76, 76, 76)', marginLeft: '10px' },
  selectDiv: { margin: '20px 0px 10px 0px' },
  selectLabel: { marginBottom: '5px', fontSize: 'large' },
  switchClass: { margin: '20px 0px 0px 0px', fontSize: 'large' },
})

const Controls = ({ setTargetLocation, setShowMapBuildings, setShowMapFlood }) => {
  const [location, setLocation] = useState('Area map')
  const [showBuildings, setShowBuildings] = useState(true)
  const [showFlood, setShowFlood] = useState(true)

  return (
    <div>
      <div className={classes.selectDiv}>
        <p className={classes.selectLabel}>Location:</p>
        <DropdownSelect
          data={locationData}
          size='lg'
          setSelectedOption={{ title: location }}
          endIcon={<Icons.ArrowDown size='md'/>}
          onSelect={v => {
            setLocation(v.title)
            setTargetLocation(v.title)
          }}
          onDelete={() => {
            setLocation('Area map')
            setTargetLocation('Area map')
          }}
          placeholder='Select location'
          classes={{
            root: 'shadow-light-10 border-3 border-secondary-200 rounded-md p-10 m-5',
            button: 'tracking-widest',
            menu: 'w-full',
          }}
        />
      </div>
      <div className={classes.selectDiv}>
        <p className={classes.selectLabel}>Before date:</p>
        <p className={classes.date}>Monday, November 8</p>
        {/* keep the following 2 DropdownSelect for future use
        <DropdownSelect
          data={[
            {
              items: [{ title: 'Monday, November 8' }],
            },
          ]}
          size='lg'
          setSelectedOption={{ title: 'Monday, November 8' }}
          endIcon={<Icons.ArrowDown size='md'/>}
          placeholder='Select before date'
          classes={{
            root: 'shadow-light-10 border-3 border-secondary-200 rounded-md',
            button: 'tracking-widest',
            menu: 'w-full',
          }}
        /> */}
      </div>
      <div className={classes.selectDiv}>
        <p className={classes.selectLabel}>After date:</p>
        <p className={classes.date}>Friday, November 19</p>
        {/* <DropdownSelect
          data={[
            {
              items: [{ title: 'Friday, November 19' }],
            },
          ]}
          size='lg'
          setSelectedOption={{ title: 'Friday, November 19' }}
          endIcon={<Icons.ArrowDown size='md'/>}
          placeholder='Select after date'
          classes={{
            root: 'shadow-light-10 border-3 border-secondary-200 rounded-md',
            button: 'tracking-widest',
            menu: 'w-full',
          }}
        /> */}
      </div>
      <div className={classes.switchClass}>
        <SwitchRound
          id='flood-switch'
          checked={showFlood}
          onChange={() => {
            setShowMapFlood(!showFlood)
            setShowFlood(!showFlood)
          }}
          label='Show Flood'
          color='interactive'
          classes={{
            label: 'ml-2',
          }}
        />
      </div>
      <div className={classes.switchClass}>
        <SwitchRound
          id='buildings-switch'
          checked={showBuildings}
          onChange={() => {
            setShowMapBuildings(!showBuildings)
            setShowBuildings(!showBuildings)
          }}
          label='Show Buildings'
          color='warning'
          classes={{
            label: 'ml-2',
          }}
        />
      </div>
    </div>
  )
}

Controls.propTypes = {
  setTargetLocation: PropTypes.func.isRequired,
  setShowMapBuildings: PropTypes.func.isRequired,
  setShowMapFlood: PropTypes.func.isRequired,
}

export default Controls
