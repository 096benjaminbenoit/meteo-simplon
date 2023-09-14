export default function MapLoading() {
  return (
    <div className="flex flex-col justify-center items-center gap-3">
      <span className="text-center text-rose-700">
        Chargement de la carte...
      </span>{" "}
      <div
        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid text-rose-700 border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      ></div>
    </div>
  );
}
