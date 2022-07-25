import React from "react";
import Cards from "./Cards"
import BarraInferior from "./BarraInferior"
import Logo from "./LogoTela1"

function comparador() { 
	return Math.random() - 0.5; 
}

export default function Tela1() {



  let deck = [
    { Q: "O que é JSX?", R: "Uma extensão de linguagem do JavaScript" },
    { Q: "O React é __", R: "uma biblioteca JavaScript para construção de interfaces" },
    { Q: "Componentes devem iniciar com __", R: "letra maiúscula" },
    { Q: "Podemos colocar __ dentro do JSX ", R: "expressões" },
    { Q: "O ReactDOM nos ajuda __", R: "interagindo com a DOM para colocar componentes React na mesma" },
    { Q: "Usamos o npm para __", R: "gerenciar os pacotes necessários e suas dependências" },
    { Q: "Usamos props para __", R: "passar diferentes informações para componentes" },
    { Q: "Usamos estado (state) para __", R: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
  ]

  deck = deck.sort(comparador);

  let tamanhoDeck = deck.length;

  const [iconesRespostas, setIconesRespostas] = React.useState([]);
  const [contador, setContador] = React.useState(0);

  const [mensagemConcluido,setMensagemConcluido] = React.useState("");


  return (
    <div className="tela1">

      <Logo />

      <Cards
        iconesRespostas={iconesRespostas}
        setIconesRespostas={setIconesRespostas}
        setContador={setContador}
        contador={contador}
        deck={deck} 
        tamanhoDeck={tamanhoDeck} 
        setMensagemConcluido={setMensagemConcluido}
        mensagemConcluido={mensagemConcluido}
      
      />
        

      <BarraInferior mensagemConcluido={mensagemConcluido} tamanhoDeck={tamanhoDeck} iconesRespostas={iconesRespostas} contador={contador} />
    </div>
  );
}
