import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";

function createRoutingPath(props: any) {
  const { source, destination } = props;
  return L.Routing.control({
    lineOptions: {
      styles: [{ color: "red", weight: 4 }],
      extendToWaypoints: true,
      missingRouteTolerance: 1,
    },
    plan: L.Routing.plan(
      [
        L.latLng(source[0], source[1]),
        L.latLng(destination[0], destination[1]),
      ],
      {
        createMarker: function (i, wp) {
          let marker = L.marker(wp.latLng, {
            draggable: true,
          });
          marker.on("dragend", function (e) {
            const { lat, lng } = e.target.getLatLng();
            props.updateCoordinates([lat, lng]);
          });
          return marker;
        },
      }
    ),
    show: false,
    routeWhileDragging: true,
    fitSelectedRoutes: "smart",
    autoRoute: true,
    showAlternatives: true,
    altLineOptions: {
      styles: [{ color: "#D3D3D3", weight: 4 }],
      extendToWaypoints: true,
      missingRouteTolerance: 1,
    },
  });
}

const RoutingPath = createControlComponent(createRoutingPath);
export { RoutingPath };
