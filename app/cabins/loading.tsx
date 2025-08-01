import Spinner from "../_components/Spinner";

function loading() {
  return (
    <div className="grid items-center justify-center">
      <Spinner />
      <p className="text-center text-gray-500">Loading cabins...</p>
    </div>
  );
}

export default loading;
