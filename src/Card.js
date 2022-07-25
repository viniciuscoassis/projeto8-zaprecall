import React from "react";
import turn from "./img/turn.png"
import party from "./img/party 2.png"

export default function Card({setMensagemConcluido,tamanhoDeck, contador, setContador, iconesRespostas, setIconesRespostas, pergunta, resposta, numPergunta}){
  
  const icons = 
  {
errou: {name: "close-circle", status: "Errou"},
quase: {name: "help-circle", status: "Quase"},
zap: {name: "checkmark-circle", status: "Zap"},
  }

  const mensagensFinais = 

    {
  ganhou: {titulo: "Parabéns!", emoji: party, texto: "Você não esqueceu de nenhum flashcard!"},
  perdeu: {titulo: "Parabéns!", emoji: "sad", texto: "Você não esqueceu de nenhum flashcard!"}
  }

  const [EscolheuCard,setEscolheuCard] = React.useState("");
  const [PedeResposta,setPedeResposta] = React.useState("");
  const [concluido, setConcluido] = React.useState("");
  const [iconPlay,setIconPlay] = React.useState("play-outline");
  

  function trabalhaResposta(resposta){
    let i = icons.errou;
    if (resposta == "errou"){
      setIconesRespostas([...iconesRespostas, i]);
      setConcluido(i.status);
      setIconPlay(i.name);
    }
  
    else if (resposta == "quase"){
      let i = icons.quase;
      setIconesRespostas([...iconesRespostas, i]);
      setConcluido(i.status);
      setIconPlay(i.name);
    
      
    }
    else if (resposta == "zap"){
      let i = icons.zap;
      setIconesRespostas([...iconesRespostas, i]);
      setConcluido(i.status);
      setIconPlay(i.name);
    }
    
    setEscolheuCard("");
    setPedeResposta("");
    setContador(contador+1);
    console.log(iconesRespostas.length);
    console.log(tamanhoDeck);

    if (iconesRespostas.length + 1 == tamanhoDeck){
      setMensagemConcluido(mensagensFinais.ganhou)
    }
  
  }
  
    return (
<div className= {`card ${EscolheuCard}`} >
        <div className={`cartaCostas ${EscolheuCard} `} onClick={iconPlay == "play-outline"? (() => setEscolheuCard('EscolheuCard')) : (()=> alert("Card Já Respondido"))}>
        <h3 className= {concluido} > Pergunta {numPergunta} </h3>
          <ion-icon name={iconPlay} onClick={iconPlay == "play-outline"? (() => setEscolheuCard('EscolheuCard')) : (()=> alert("Card Já Respondido"))} ></ion-icon>
        </div>

        <div className={`cartaConteudo ${EscolheuCard} ${PedeResposta}`}>
          {pergunta}
          <img src={turn} onClick={() => setPedeResposta("PediuResposta")}></img>
        </div>

        <div className={`cartaResposta ${PedeResposta}`}>
          {resposta}
          <div className="boxes">
            <div onClick={() => trabalhaResposta("errou")}>Não lembrei</div>
            <div onClick={() => trabalhaResposta("quase")}>Quase não lembrei</div>
            <div onClick={() => trabalhaResposta("zap")}>Zap!</div>
          </div>
        </div> 
      </div>
    )
}
