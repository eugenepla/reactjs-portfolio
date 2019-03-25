import React from 'react'
import { Map as LeafletMap, GeoJSON, Marker, Popup } from 'react-leaflet';
import worldGeoJSON from 'geojson-world-map';

class Map extends React.Component {
  render() {
    return (
      <LeafletMap
        center={[50, 10]}
        zoom={3}
        maxZoom={10}
        attributionControl={true}
        zoomControl={true}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        dragging={true}
        animate={true}
        easeLinearity={0.35}
      >
        <GeoJSON
          data={worldGeoJSON}
          style={() => ({
            color: '#4a83ec',
            weight: 0.9,
            fillColor: "lightgreen",
            fillOpacity: 5,
          })}
        />
        <Marker position={[49.5, 36.5]}>
          <Popup>
            Kharkiv, Ukraine
          </Popup>
        </Marker>
      </LeafletMap>
    );
  }
}

export default Map