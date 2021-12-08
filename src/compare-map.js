// https://codesandbox.io/s/dcesq?file=/src/App.js:0-1944

import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import PropTypes from 'prop-types'

import MapGL, { Source, Layer } from 'react-map-gl'
import mapboxgl from 'mapbox-gl'
import MapboxCompare from 'mapbox-gl-compare'
import 'mapbox-gl/dist/mapbox-gl.css'
import 'mapbox-gl-compare/dist/mapbox-gl-compare.css'


// https://github.com/mapbox/mapbox-gl-js/issues/10565
// https://stackoverflow.com/a/69489231
// // eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default


import { useDebounce } from 'use-debounce'

import { LOCATIONS } from './constants'
import floodLevel from './data/flood_polygons.json'


const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN || ''
const style = {
  position: 'absolute',
  top: 100,
  bottom: 0,
}

const floodLevelStyle = {
  id: 'flood_level_layer',
  type: 'fill',
  paint: {
    'fill-color': '#0080ff', // blue color fill
    'fill-opacity': 0.4,
  },
}

const CompareMap = ({ location }) => {
  const [newViewport, setNewViewport] = useState({
    latitude: 49.068,
    longitude: -122.15,
    zoom: 11.6,
  })
  const [viewport] = useDebounce(newViewport, 20)

  const beforeRef = useRef()
  const afterRef = useRef()

  useEffect(() => {
    if (location) {
      setNewViewport({
        ...LOCATIONS[location],
        zoom: location === 'Area map' ? 11.5 : 13.5,
      })
    }
  }, [location])

  useEffect(() => {
    const beforeMap = beforeRef.current.getMap()
    const afterMap = afterRef.current.getMap()
    const map = new MapboxCompare(beforeMap, afterMap, '#comparison-container')

    return () => map.remove()
  }, [])

  const changedViewport = useCallback((oldViewport, newViewport) => {
    return oldViewport.zoom !== newViewport.zoom ||
    oldViewport.latitude !== newViewport.latitude ||
    oldViewport.longitude !== newViewport.longitude
  }, [])

  const compareMap = useMemo(() => (
    <div id='comparison-container'>
      <MapGL
        ref={beforeRef}
        {...viewport}
        width='81vw'
        height='88vh'
        onViewportChange={newViewport => {
          if (changedViewport(viewport, newViewport)) {
            setNewViewport(newViewport)
          }
        }}
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
        onViewportChange={newViewport => {
          if (changedViewport(viewport, newViewport)) {
            setNewViewport(newViewport)
          }
        }}
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
        <Source
          id='flood_level'
          type='geojson'
          data={floodLevel}
        >
          <Layer {...floodLevelStyle} />
        </Source>
      </MapGL>
    </div>
  ), [viewport, changedViewport])

  return compareMap
}

CompareMap.propTypes = {
  location: PropTypes.string,
}

CompareMap.defaultProps = {
  location: 'Area map',
}

export default CompareMap
