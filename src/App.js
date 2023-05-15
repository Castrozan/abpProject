import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
import "./App.css";
import vector from './5265402.png';

const coordenadaSATC = { lat: -28.703918, lng: -49.406100 };
const zoom = 18

const App = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });
  const center = useMemo(() => (coordenadaSATC), []);

  return (
    <div className="App">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          center={center}
          zoom={zoom}
        >
          <MarkerF position={coordenadaSATC} icon={vector} />
        </GoogleMap>
      )}
    </div>
  );
};

export default App;