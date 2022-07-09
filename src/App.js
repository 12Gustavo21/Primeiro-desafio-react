import React, { Component } from "react";
import foto from "./img/foto_maracuja.jpg";
import "./styles.css";

class App extends Component {
  state = {
    sobre_mim: [
      {
        nome: "Gustavo",
        idade: 17,
        comida_favorita: "Crepe suiço"
      }
    ]
  };
  render() {
    return (
      <section>
        <h1>{this.state.sobre_mim[0].nome}</h1>
        <h2>{this.state.sobre_mim[0].idade}</h2>
        <h3>{this.state.sobre_mim[0].comida_favorita}</h3>
        <h4>Músicas favoritas</h4>
        <ul>
          <li>Além do Rio Azul</li>
          <li>Perfect Grill</li>
          <li>Black out days</li>
        </ul>
        <img src={foto} />
      </section>
    );
  }
}
export default App;
