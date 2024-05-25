import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useQuery } from 'react-query';
import axios from 'axios';
import 'leaflet/dist/leaflet.css';

const Map: React.FC = () => {
  const { data, isLoading } = useQuery('covidCountryData', async () => {
    const response = await axios.get('https://disease.sh/v3/covid-19/countries');
    return response.data;
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <MapContainer center={[0, 0]} zoom={2} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {data.map((country: any) => (
        <Marker key={country.countryInfo.iso3} position={[country.countryInfo.lat, country.countryInfo.long]}>
          <Popup>
            <div>
              <strong>{country.country}</strong>
              <p>Active: {country.active}</p>
              <p>Recovered: {country.recovered}</p>
              <p>Deaths: {country.deaths}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
