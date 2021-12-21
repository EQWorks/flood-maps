import React, { useState } from 'react'

import { Layout, makeStyles  } from '@eqworks/lumen-labs'

import TopBar from './top-bar.jsx'
import Controls from './controls.jsx'
import CompareMap from './compare-map.jsx'


const classes = makeStyles({
  headerClass: { boxShadow: '0 0 8px 0 rgba(0, 0, 0, 0.8)' },
  contentClass: { width: '85%', height: '88vh' },
  siderClass: { margin: '10px 20px 0px 30px',  width: '15%' },
})

const App = () => {
  const [location, setLocation] = useState('')
  const [showBuildings, setShowBuildings] = useState(true)
  const [showFlood, setShowFlood] = useState(true)

  return (
    <Layout>
      <Layout.Header className={classes.headerClass}>
        <TopBar />
      </Layout.Header>
      <Layout>
        <Layout.Sider className={classes.siderClass}>
          <Controls
            setTargetLocation={setLocation}
            setShowMapBuildings={setShowBuildings}
            setShowMapFlood={setShowFlood}
          />
        </Layout.Sider>
        <Layout.Content className={classes.contentClass}>
          <CompareMap
            location={location}
            showBuildings={showBuildings}
            showFlood={showFlood}
          />
        </Layout.Content>
      </Layout>
    </Layout>
  )
}

export default App
