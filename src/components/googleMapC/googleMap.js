import React from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

export default function googleMap() {
  const snazzyMap = [
    {
      featureType: 'all',
      elementType: 'labels.text.fill',
      stylers: [
        {
          saturation: 36,
        },
        {
          color: '#000000',
        },
        {
          lightness: 40,
        },
      ],
    },
    {
      featureType: 'all',
      elementType: 'labels.text.stroke',
      stylers: [
        {
          visibility: 'on',
        },
        {
          color: '#000000',
        },
        {
          lightness: 16,
        },
      ],
    },
    {
      featureType: 'all',
      elementType: 'labels.icon',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'administrative',
      elementType: 'geometry.fill',
      stylers: [
        {
          color: '#000000',
        },
        {
          lightness: 20,
        },
      ],
    },
    {
      featureType: 'administrative',
      elementType: 'geometry.stroke',
      stylers: [
        {
          color: '#000000',
        },
        {
          lightness: 17,
        },
        {
          weight: 1.2,
        },
      ],
    },
    {
      featureType: 'landscape',
      elementType: 'geometry',
      stylers: [
        {
          color: '#000000',
        },
        {
          lightness: 20,
        },
      ],
    },
    {
      featureType: 'poi',
      elementType: 'geometry',
      stylers: [
        {
          color: '#000000',
        },
        {
          lightness: 21,
        },
      ],
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.fill',
      stylers: [
        {
          color: '#000000',
        },
        {
          lightness: 17,
        },
      ],
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.stroke',
      stylers: [
        {
          color: '#000000',
        },
        {
          lightness: 29,
        },
        {
          weight: 0.2,
        },
      ],
    },
    {
      featureType: 'road.arterial',
      elementType: 'geometry',
      stylers: [
        {
          color: '#000000',
        },
        {
          lightness: 18,
        },
      ],
    },
    {
      featureType: 'road.local',
      elementType: 'geometry',
      stylers: [
        {
          color: '#000000',
        },
        {
          lightness: 16,
        },
      ],
    },
    {
      featureType: 'transit',
      elementType: 'geometry',
      stylers: [
        {
          color: '#000000',
        },
        {
          lightness: 19,
        },
      ],
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [
        {
          color: '#000000',
        },
        {
          lightness: 17,
        },
      ],
    },
  ];

  const MapObject = withGoogleMap((props) => (
    <GoogleMap
      options={{
        styles: snazzyMap,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
      }}
      defaultZoom={7}
      defaultCenter={{ lat: 44.4, lng: -77.7 }}
    >
      {/* <Marker position={{ lat: 44.389273, lng: -79.687361 }} />

      <Marker position={{ lat: 43.8026675, lng: -79.5341406 }} />

      <Marker position={{ lat: 45.4209219, lng: -75.6962932 }} /> */}
      icon=
      {{
        anchor: new window.google.maps.Point(10, 10),
        scaledSize: new window.google.maps.Size(20, 20),
      }}
    </GoogleMap>
  ));

  return (
    <MapObject
      containerElement={<div style={{ height: `500px` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  );
}
