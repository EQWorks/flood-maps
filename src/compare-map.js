// https://codesandbox.io/s/dcesq?file=/src/App.js:0-1944

import React, { useState, useEffect, useRef } from 'react'

import MapGL, { Source, Layer } from 'react-map-gl'
import MapboxCompare from 'mapbox-gl-compare'
import 'mapbox-gl/dist/mapbox-gl.css'
import 'mapbox-gl-compare/dist/mapbox-gl-compare.css'


const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN || ''

const CompareMap = () => {
  const [viewport, setViewport] = useState({
    latitude: 49.068,
    longitude: -122.15,
    bearing: 0,
    pitch: 0,
    zoom: 11.6,
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
        onViewportChange={newViewport => setViewport(newViewport)}
        style={style}
        mapStyle='mapbox://styles/dilshaneq/cjrl1169p0v4t2sqonjvr3ynz'
        mapboxApiAccessToken={MAPBOX_TOKEN}
      >
        <Source
          id='before-image'
          type='raster'
          url='mapbox://dilshaneq.82h26l9b'
          tileSize={256}
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
        onViewportChange={newViewport => setViewport(newViewport)}
        style={style}
        mapStyle='mapbox://styles/dilshaneq/cjrl1169p0v4t2sqonjvr3ynz'
        mapboxApiAccessToken={MAPBOX_TOKEN}
      >
        <Source
          id='after-image'
          type='raster'
          url='mapbox://dilshaneq.24562f8s'
          tileSize={256}
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
