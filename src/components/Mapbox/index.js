import React from 'react';
import Mapbox from './Mapbox';
import OfficiallAddress from './officiallAddress';
function convertDataToGeoJSON(dataRaw) {
  const myGeoJSON = {};
  myGeoJSON.type = 'FeatureCollection';
  myGeoJSON.crs = {
    type: 'name',
    properties: { name: 'urn:ogc:def:crs:OGC:1.3:CRS84' },
  };
  myGeoJSON.features = dataRaw.map((location) => {
    return {
      type: 'Feature',
      properties: {
        id: location.poi_id,
        name: location.name,
        mag: 1.42,
      },
      geometry: { type: 'Point', coordinates: [location.lon, location.lat] },
    };
  });

  return myGeoJSON;
}
const dataRaw = [
  { poi_id: 1, name: 'Barrie', lat: 44.389273, lon: -79.687361 },
  { poi_id: 2, name: 'Toronto', lat: 43.8026675, lon: -79.5341406 },
  { poi_id: 3, name: 'Midland', lat: 44.74257, lon: -79.87867 },
];

const Index = ({ dataInput = dataRaw }) => {
  const data = convertDataToGeoJSON(dataInput);

  return (
    <>
      <Mapbox data={data} />
      <OfficiallAddress />
    </>
  );
};

export default Index;
