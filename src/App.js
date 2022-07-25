import Tela1 from "./Tela1";
import TelaInicial from "./TelaInicial";
import React from "react";

export default function App() {
  const [tela, setTela] = React.useState(true);

  return (
    <>{tela ? <TelaInicial setTela={setTela} tela={tela} /> : <Tela1 />}</>
  );
}
