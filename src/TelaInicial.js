import logo from "./img/image 1.png"

export default function TelaInicial({setTela, tela}){

    return (

    <div className="telaInicial "> 

    <div className="container">
       <img src={logo} />
       <h1>ZapRecall</h1>
       <button onClick={()=> setTela(!tela)}>Iniciar Recall!</button>
    </div>
    
    </div>

    )
}