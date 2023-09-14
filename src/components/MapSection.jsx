import Map from "./Map";
import MapInformations from "./MapInformations";
import { useState } from "react";

export default function MapSection() {
  const [selectedFactory, setSelectedFactory] = useState(null);

  return (
    <section className="w-screen">
      <h2 className="text-2xl font-bold text-center py-5">
        Simplon près de chez vous
      </h2>
      <div className="grid grid cols-1 lg:grid-cols-2 md:py-10 md:px-20">
        <MapInformations selectedFactory={selectedFactory} />
        <Map setSelectedFactory={setSelectedFactory} />
      </div>
    </section>
  );
}
