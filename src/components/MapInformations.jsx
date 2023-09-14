import { FaMapMarkerAlt } from "react-icons/fa";
import Meteo from "./Meteo";

export default function MapInformations({ selectedFactory }) {
  if (!selectedFactory) {
    return (
      <div className="text-xl text-center py-20 px-5">
        Sélectionnez point sur la carte pour voir les détails
      </div>
    );
  }

  return (
    <div className="bg-slate-100 p-10">
      <div className="border-t-4 border-rose-600 bg-white h-full">
        <h2 className="text-center text-xl font-bold py-2">
          {selectedFactory.factoryName}
        </h2>
        <div className="flex justify-center gap-5">
          <FaMapMarkerAlt className="text-rose-600" />
          <p>
            {selectedFactory.address}, {selectedFactory.postCode}
          </p>
        </div>
        <Meteo selectedFactory={selectedFactory} />
      </div>
    </div>
  );
}
