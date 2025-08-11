import { getBookedDatesByCabinId, getSettings } from "../_lib/data-service";
import { cabinType } from "../types/Types";
import DateSelector from "./DateSelector";
import ReservationForm from "./ReservationForm";

async function Reservation({ cabin }: { cabin: cabinType }) {
  const [settings, bookedDate] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabin.id),
  ]);
  return (
    <div className="grid grid-cols-2 border-primary-800 min-h-[400px]">
      <DateSelector settings={settings} cabin={cabin} />
      <ReservationForm cabin={cabin} />
    </div>
  );
}

export default Reservation;
