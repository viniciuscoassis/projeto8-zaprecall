import React from "react";
import Cards from "./Cards"
import BarraInferior from "./BarraInferior"
import Logo from "./LogoTela1"




export default function Tela1() {

  let deck = [
    {Q: "O que é JSX?" , R: "Uma extensão de linguagem do JavaScript"},
    {Q: "O React é __" , R: "uma biblioteca JavaScript para construção de interfaces"},
    {Q: "Componentes devem iniciar com __" ,R: "letra maiúscula"},
    {Q: "Podemos colocar __ dentro do JSX ",R: "expressões"},
    {Q: "O ReactDOM nos ajuda __", R: "interagindo com a DOM para colocar componentes React na mesma"},
    {Q: "Usamos o npm para __", R: "gerenciar os pacotes necessários e suas dependências"},
    {Q: "Usamos props para __", R: "passar diferentes informações para componentes"} 
  ]
  let tamanhoDeck = deck.length;

  const [iconesRespostas,setIconesRespostas] = React.useState({nomeIcon: "close-circle", status: "errou"});
  const [contador, setContador] = React.useState(0);


  return (
    <div className="tela1">
     
     <Logo/>
    
     <Cards 
     iconesRespostas={iconesRespostas} 
     setIconesRespostas={setIconesRespostas} 
     setContador={setContador}
     contador={contador}/>

    <BarraInferior tamanhoDeck={tamanhoDeck} iconesRespostas={iconesRespostas} contador={contador}/>
    </div>
  );
}
