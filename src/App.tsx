import { useState } from "react";
import Map from "./components/Map";
import "leaflet/dist/leaflet.css";
import { LatLngLiteral } from "leaflet";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [source, setSource] = useState<LatLngLiteral | undefined>();
  const [destination, setDestination] = useState<LatLngLiteral | undefined>();
  const reset = () => {
    setSource(undefined);
    setDestination(undefined);
  };

  return (
    <div className="container">
      <h3 className="display-6 text-center">
        Welcome to myHyperTrack demo !!!
      </h3>
      <p>
        <small className="text-body-secondary">
          Please click anywhere on the map to mark your source and then
          destination. You will see a route between the 2 points. You can drag
          any of the marker to change the location which will suggest a
          new/updated route for the same.
        </small>
      </p>
      <Map
        source={source}
        reset={reset}
        destination={destination}
        handleClick={(coordinates: LatLngLiteral, type?: string) => {
          if (!source) {
            setSource(coordinates);
          } else if (!destination) {
            setDestination(coordinates);
          }
        }}
      />
    </div>
  );
}

export default App;
