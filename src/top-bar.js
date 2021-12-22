import React from 'react'

import { makeStyles } from '@eqworks/lumen-labs'

import EQlogo from './images/eq.png'


const classes = makeStyles({
  appBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'black',
    color: 'white',
    fontFamily: 'Open Sans',
    fontSize: '1.5rem',
    height: '80px',
    padding: '15px 25px 15px 25px',
  },
  logo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoLabel: {
    marginLeft: '10px',
  },
})

const TopBar = () => {
  return (
    <div className={classes.appBar}>
      <div className={classes.logo}>
        <img alt='EQ Logo' src={EQlogo} width={50} height={50} />
        <p className={classes.logoLabel}>EQ Works</p>
      </div>
      <p>British Columbia Flood Maps 2021</p>
    </div>
  )
}

export default TopBar
