import { auth } from "../_lib/auth";
import { getBookedDatesByCabinId, getSettings } from "../_lib/data-service";
import { cabinType } from "../types/Types";
import DateSelector from "./DateSelector";
import LoginMessage from "./LoginMessage";
import ReservationForm from "./ReservationForm";
import { Session } from "next-auth";

async function Reservation({ cabin }: { cabin: cabinType }) {
  const session: Session | null = await auth();

  const [settings, bookedDate] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabin.id),
  ]);

  return (
    <div className="grid grid-cols-2 border-primary-800 min-h-[400px]">
      <DateSelector
        settings={settings}
        cabin={cabin}
        bookedDates={bookedDate}
      />
      {session?.user ? (
        <ReservationForm cabin={cabin} session={session} />
      ) : (
        <LoginMessage />
      )}
    </div>
  );
}

export default Reservation;
