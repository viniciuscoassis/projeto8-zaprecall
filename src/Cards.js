import React from "react";
import Card from "./Card";


export default function Cards({setMensagemConcluido, tamanhoDeck, deck, iconesRespostas,setIconesRespostas, contador, setContador}){

    return(

    <div className="cards">

{deck.map((daVez, index) => 
 ( <Card 
  key={index}
pergunta={daVez.Q}
resposta={daVez.R}
numPergunta={index+1}
iconesRespostas={iconesRespostas}
setIconesRespostas={setIconesRespostas}
contador={contador}
setContador ={setContador}
tamanhoDeck={tamanhoDeck}
setMensagemConcluido={setMensagemConcluido}

/>))
}

  
    </div>

    )
}