import Image from "next/image";
import iconHeader from "../assets/icon-header.svg";
export function Header() {
  return (
    <div className="flex items-center gap-5 py-2">
      <Image alt="icon" src={iconHeader} />

      <nav className="flex items-center gap-5">
        <a href="" className="font-medium text-m text-orange-200">
          Evento
        </a>
        <a href="" className="font-medium text-m">
          Pepeca
        </a>
      </nav>
    </div>
  );
}
