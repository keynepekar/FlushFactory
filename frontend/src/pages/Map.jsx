import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { fetchReactors } from '../api';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import { Helmet } from 'react-helmet';

const DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

const Map = () => {
  const [reactors, setReactors] = useState([]);

  useEffect(() => {
    fetchReactors().then(data => setReactors(data));
  }, []);

  return (
    <>
      <Helmet>
        <title>Carte | FlushFactory</title>
        <meta name="description" content="Carte interactive des réacteurs." />
      </Helmet>
      <MapContainer 
        center={[46.6034, 1.8883]} 
        zoom={6} 
        className="map-container"
        maxBounds={[
          [40, -10],
          [52, 10],
        ]}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {reactors.map(reactor => (
          <Marker key={reactor.id} position={reactor.position}>
            <Popup>{reactor.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </>
  );
};

export default Map;
