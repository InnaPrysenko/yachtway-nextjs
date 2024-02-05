'use client'
import React from 'react';
import GoogleMapReact from 'google-map-react';
import 'tailwindcss/tailwind.css';


const locationData = {
    coordinates: {
        lat: 26.1224386,
        lng: -80.1373174
    }
};


// Define the props type
// interface IMapProps {
//     coordinates: {
//         lat: number;
//         lng: number;
//     };
// }

const MapMarker: React.FC<{ lat: number; lng: number }> = () => <div className="h-4 w-4 bg-purple-600 rounded-full"></div>;

const MapComponent = () => {
    const apiKey = process.env.NEXT_PUBLIC_REACT_APP_GOOGLE_MAP_API_KEY;
    return (
        <div style={{ height: '250px', width: '100%' }}>
            <GoogleMapReact
                // @ts-ignore
                bootstrapURLKeys={{ key: apiKey }}
                defaultCenter={locationData.coordinates}
                defaultZoom={11}
            >
                <MapMarker
                    lat={locationData.coordinates.lat}
                    lng={locationData.coordinates.lng}
                />
            </GoogleMapReact>
        </div>
    );
};

export default MapComponent;
