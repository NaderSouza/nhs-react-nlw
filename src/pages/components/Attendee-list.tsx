import { Search } from "lucide-react";
export function AttendeeList() {
  return (
    <div className="flex gap-3 items-center">
      <h1 className="text-2xl font-bold">Pepeca</h1>
      <div className="px-3 w-72 py-1.5 border border-orange-300/35 rounded-lg text-sm flex items-center gap-3">
        <Search className="size-4 text-orange-300" />

        <input
          className="bg-transparent flex-1 outline-none"
          placeholder="Buscar"
        />
      </div>
    </div>
  );
}
