import { getCabins } from "../_lib/data-service";
import CabinCard from "./CabinCard";
import type { cabinType } from "../types/Types";

async function CabinList({ filter }: { filter: string }) {
  const cabins = await getCabins();

  if (!cabins || cabins.length === 0) {
    return null;
  }

  let displayedCabins = cabins;

  if (filter === "small") {
    displayedCabins = cabins.filter((cabin) => cabin.maxCapacity <= 3);
  } else if (filter === "medium") {
    displayedCabins = cabins.filter(
      (cabin) => cabin.maxCapacity >= 4 && cabin.maxCapacity <= 7
    );
  } else if (filter === "large") {
    displayedCabins = cabins.filter((cabin) => cabin.maxCapacity >= 8);
  }

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {displayedCabins.map((cabin: cabinType) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}

export default CabinList;
