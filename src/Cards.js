import React from "react";
import Card from "./Card";


export default function Cards({iconesRespostas,setIconesRespostas, contador, setContador}){

    const [EscolheuCard,setEscolheuCard] = React.useState("");
    const [PedeResposta,setPedeResposta] = React.useState("");


    const icons = 
  {
errou: {nomeIcon: "close-circle", status: "errou"},
quase: {nomeIcon: "help-circle", status: "quase"},
zap: {nomeIcon: "checkmark-circle", status: "zap"},
  }


function trabalhaResposta(resposta){
  if (resposta == "errou"){
    setIconesRespostas({...iconesRespostas}, icons.errou);
    console.log(icons.errou)
  }
  setContador(contador+1);

}

    return(

    <div className="cards">


<div className= {`card ${EscolheuCard}`} onClick={() => setEscolheuCard("EscolheuCard")}>
        <div className={`cartaCostas ${EscolheuCard}`}>
          <h3 > Pergunta 3 </h3>
          <ion-icon name="play-outline"></ion-icon>
        </div>

        <div className={`cartaConteudo ${EscolheuCard} ${PedeResposta}`}>
          2+2?
          <img src="./img/turn.png" onClick={() => setPedeResposta("PediuResposta")}></img>
        </div>

        <div className={`cartaResposta ${PedeResposta}`}>
          4 neeeeeeeeeeeeeeeeeeeeeeedsadeakldnaksksalndklasmdkmask.dmla
          <div className="boxes">
            <div onClick={() => trabalhaResposta("errou")}>Não lembrei</div>
            <div onClick={() => trabalhaResposta("quase")}>Quase não lembrei</div>
            <div onClick={() => trabalhaResposta("zap")}>Zap!</div>
          </div>
        </div> 
      </div>
    
    </div>

    )
}