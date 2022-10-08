import React from "react";
import "./about.css";

import {Link} from 'react-router-dom'

export default props => {
    return (
        <div className="corpo-about">
            <div className="glasmorphism-about">
                <div className="area-message">

                    <h1 className="message-title">Olá !</h1>
                    <p className="message-paragraph">Sou William Wallace!
                        <br />Adoro programação, além de escutar música, fazer exercicios fisicos e aprender coisas novas!
                        <br />Sou estudante da área de Tecnologia desde 2018, e estudo Desenvolvimento Web Front-End a 1 Ano.   
                        <br /> Sinta-se livre para entrar em contato ou dar uma olhada no meu trabalho.
                    </p>
                </div>
                <div className="area-buttons-about">
                <Link to="/contact">  <button className="buttons-about">Contatar</button> </Link>
                    <Link to="/projects"><button className="buttons-about">Portifólio</button></Link>
                </div>
            </div>
        </div>
    )
}