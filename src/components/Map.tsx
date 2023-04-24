import {
  MapContainer,
  TileLayer,
  Tooltip,
  Marker,
  useMapEvents,
} from "react-leaflet";
import { LatLngExpression, LatLngLiteral } from "leaflet";
import "./Map.css";
import { RoutingPath } from "./Routing";
import Control from "./Control";

type Props = {
  source: LatLngLiteral | undefined;
  destination: LatLngLiteral | undefined;
  handleClick: (coordinates: LatLngLiteral) => void;
  reset: () => void;
};

export default function Map({
  handleClick,
  source,
  destination,
  reset,
}: Props) {
  const position: LatLngExpression = [12.972442, 77.580643];

  return (
    <MapContainer center={position} zoom={15} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Start clickMe={handleClick} />
      {source && !destination && (
        <Marker position={source}>
          <Tooltip>Start Position</Tooltip>
        </Marker>
      )}
      {source && destination && (
        <RoutingPath
          source={source}
          destination={destination}
          updateCoordinates={handleClick}
        />
      )}
      <Control source={source} destination={destination} triggerReset={reset} />
    </MapContainer>
  );
}

const Start = ({ clickMe }: any) => {
  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      clickMe([lat, lng]);
    },
  });
  return null;
};
