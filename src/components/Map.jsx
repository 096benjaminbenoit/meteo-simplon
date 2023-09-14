import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import data from "./../data/simplon.json";
import { useState, useEffect } from "react";

export default function Map() {
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
      setCenter([48.866667, 2.333333])
    }

    navigator.geolocation.getCurrentPosition(success, error);
  }, []);

  if (isLoading) {
    return (
      <>
        <div className="flex flex-col justify-center items-center gap-3">
          <span className="text-center text-rose-700">
            Chargement de la carte...
          </span>{" "}
          <div
            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid text-rose-700 border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          ></div>
        </div>
      </>
    );
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
        <Marker key={factory.factoryId} position={[factory.lat, factory.lng]}>
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
