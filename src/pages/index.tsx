import { Header } from "./components/Header";
import { AttendeeList } from "./components/Attendee-list";

export default function MyApp() {
  return (
    <main className=" min-h-screen min-w-screen  bg-gray-800 text-orange-300 antialiased">
      <div className="max-w-[1216px] mx-auto py-5 flex flex-col gap-5">
        <Header />
        <AttendeeList />
      </div>
    </main>
  );
}
