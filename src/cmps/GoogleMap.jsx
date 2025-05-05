import React, { useState } from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'

const containerStyle = {
    width: '500px',
    height: '500px',
}

export function MyMap({center}) {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: 'AIzaSyAN0apMDfs49am4R8uqSOvUdJZaBQloDVg',
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        // const bounds = new window.google.maps.LatLngBounds(center)
        // map.fitBounds(bounds)

        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={17}
            mapTypeId="satellite"
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            {/* Child components, such as markers, info windows, etc. */}
            <Marker
                position={{
                    lat: 32.0853,
                    lng: 34.7818,
                }}

            />
            <Marker
                position={
                    {
                        lat: 32.7940,
                        lng: 34.9896,
                    }
                } />
            <Marker
                position={
                    {
                        lat: 31.2518,
                        lng: 34.7913,
                    }
                } />
            <Marker
                position={
                    {
                        lat: 29.5581,
                        lng: 34.9482,
                    }
                } />
            <Marker
                position={
                    {
                        lat: 31.8922,
                        lng: 34.8094,
                    }
                } />

            <>

            </>
        </GoogleMap>
    ) : (
        <></>
    )
}

export default React.memo(MyMap)