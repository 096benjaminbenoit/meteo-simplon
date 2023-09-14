import { FaMapMarkerAlt } from "react-icons/fa";

export default function MapInformations() {
  return (
    <div className="bg-slate-100 p-10">
      <div className="border-t-4 border-rose-600 bg-white h-full">
        <h2 className="text-center text-xl font-bold py-2">Simplon Narbonne</h2>
        <div className="flex justify-center gap-5">
          <FaMapMarkerAlt className="text-rose-600" />
          <p>Narbonne, 11000 Occitanie, France</p>
        </div>
        <p className="py-10 text-center">INFORMATIONS</p>
      </div>
    </div>
  );
}
