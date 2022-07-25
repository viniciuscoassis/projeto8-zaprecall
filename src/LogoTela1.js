import logoP from "./img/logo-pequeno.png"

export default function Logo(){
    return (
        <div className="topo">
        <div className="containerTopo">
          <img src={logoP} />
          <h1> ZapRecall</h1>
        </div>
      </div>
    )
}