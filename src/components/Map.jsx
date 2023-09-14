import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import data from "./../data/simplon.json";
import { useState, useEffect } from "react";
import MapLoading from "./MapLoading";

export default function Map({ setSelectedFactory }) {
  const [center, setCenter] = useState([0, 0]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    function success(pos) {
      let crd = pos.coords;
      setCenter([crd.latitude, crd.longitude]);
      setIsLoading(false);
    }

    function error() {
      setIsLoading(false);
      setCenter([48.866667, 2.333333]);
    }

    navigator.geolocation.getCurrentPosition(success, error);
  }, []);

  if (isLoading) {
    return <MapLoading />;
  }

  return (
    <MapContainer
      center={center}
      zoom={8}
      scrollWheelZoom={false}
      className="h-96"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {data.factories.map((factory) => (
        <Marker
          key={factory.factoryId}
          position={[factory.lat, factory.lng]}
          eventHandlers={{
            click: () => {
              setSelectedFactory(factory);
            },
          }}
        >
          <Popup>
            {factory.factoryName} <br />
            {factory.address}, {factory.postCode} <br />
            <a href={factory.btn_url} target="_blank" rel="noopener noreferrer">
              {factory.btn_text}
            </a>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
