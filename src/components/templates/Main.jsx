import React from "react";
import './Main.css'
import minhaImagem from '../../assets/img/perfil.jpg'


import {Link} from 'react-router-dom'

export default props => {
    return (
        <main className="corpo">

            <div className="glasmorphism">
                <div className="area-perfil">
                    <img src={minhaImagem} alt="foto-do-perfil" className="foto-perfil" />
                    <h2 className="meu-nome">William Wallace</h2>
                    <div className="divisao-card"></div>
                    <p className="profissao">Programador Web Front-End</p>
                    <div className="divisao-card-2"></div>
                    <div className="redes-sociais">
                        <a href="https://github.com/williamwallace076" className="link-Social">GitHub</a>
                        <a href="https://www.linkedin.com/in/william-wallace-4b7348237/" className="link-Social">Linkedin</a>
                    </div>
                    </div>

                <div className="area-de-projetos">
                    <p className="titulo">Portifólio de projetos Front-End</p>
                   <Link to="/projects"><button className="botao-projetos">Projetos</button></Link>
                </div>
            </div>
                
        </main>
    )
}