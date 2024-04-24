interface MyButtonProps {
  text: string;
}

function MyButton(props: MyButtonProps) {
  return (
    <button className="button bg-orange-400 h-10 px-3 rounded font-medium">
      {props.text}
    </button>
  );
}

export default function MyApp() {
  return (
    <div className="flex gap-2">
      <MyButton text="Clique aqui" />
      <MyButton text="Clique 2" />
      <MyButton text="Clique 3" />
      <MyButton text="oi" />

      <img />
      <input />
    </div>
  );
}
