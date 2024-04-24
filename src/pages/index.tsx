import { Header } from "./components/Header";
import { AttendeeList } from "./components/Attendee-list";

export default function MyApp() {
  return (
    <div className="flex gap-2">
      <Header />
      <AttendeeList />
    </div>
  );
}
