import iconHeader from "../assets/icon-header.svg";
export function Header() {
  return (
    <div>
      <img src={iconHeader} />

      <nav>
        <a href="">Evento</a>
        <a href="">Pepeca</a>
      </nav>
    </div>
  );
}
