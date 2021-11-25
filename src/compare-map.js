// https://codesandbox.io/s/dcesq?file=/src/App.js:0-1944

import React, { useState, useEffect, useRef } from 'react'

import MapGL, { Source, Layer } from 'react-map-gl'
import MapboxCompare from 'mapbox-gl-compare'
import 'mapbox-gl/dist/mapbox-gl.css'
import 'mapbox-gl-compare/dist/mapbox-gl-compare.css'


const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN || ''

const CompareMap = () => {
  const [viewport, setViewport] = useState({
    latitude: 49.036608,
    longitude: -122.222293,
    bearing: 0,
    pitch: 0,
    zoom: 15,
  })

  const beforeRef = useRef()
  const afterRef = useRef()
  const style = {
    position: 'absolute',
    top: 100,
    bottom: 0,
  }

  useEffect(() => {
    const beforeMap = beforeRef.current.getMap()
    const afterMap = afterRef.current.getMap()
    const map = new MapboxCompare(beforeMap, afterMap, '#comparison-container')

    return () => map.remove()
  }, [])

  return (
    <div id='comparison-container'>
      <MapGL
        ref={beforeRef}
        {...viewport}
        width='81vw'
        height='88vh'
        onViewportChange={viewport => setViewport(viewport)}
        style={style}
        mapStyle='mapbox://styles/mapbox/dark-v10'
        mapboxApiAccessToken={MAPBOX_TOKEN}
      >
        <Source
          id='before-image'
          type='raster'
          url='mapbox://mapbox.satellite'
          coordinates={[
            [-122.234959, 49.041818],
            [-122.208633, 49.041818],
            [-122.208633, 49.032149],
            [-122.234959, 49.032149],
          ]}
        />
        <Layer
          id='overlay'
          source='before-image'
          type='raster'
        />
      </MapGL>
      <MapGL
        ref={afterRef}
        {...viewport}
        width='81vw'
        height='88vh'
        onViewportChange={viewport => setViewport(viewport)}
        style={style}
        mapStyle='mapbox://styles/dilshaneq/cjrl1169p0v4t2sqonjvr3ynz'
        mapboxApiAccessToken={MAPBOX_TOKEN}
      >
        <Source
          id='after-image'
          type='raster'
          url='mapbox://dilshaneq.cjdmu22ef00f82woxeuoqs3kk-6erkb'
          coordinates={[
            [-122.234959, 49.041818],
            [-122.208633, 49.041818],
            [-122.208633, 49.032149],
            [-122.234959, 49.032149],
          ]}
        />
        <Layer
          id='overlay'
          source='after-image'
          type='raster'
        />
      </MapGL>
    </div>
  )
}

export default CompareMap
