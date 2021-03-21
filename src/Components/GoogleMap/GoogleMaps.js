import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '610px',
  height: '800px',
  borderRadius: '15px'
};

const center = {
  lat: 22.620433,
  lng: 91.658263
};

const GoogleMaps = () => {
    return (
        <div>
            <LoadScript
        googleMapsApiKey="AIzaSyBSaV5p9uv7_YZhXbaKi0VtRSF4gJdNiv4"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap>
      </LoadScript>
        </div>
    );
};

export default GoogleMaps;