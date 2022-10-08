import React from "react";
import './Header.css';
import {Link} from 'react-router-dom'
export default props => {
    
    return(
        <header title="Portifolio-cabecalho" className="cabecalho">

            <div className="cabecalho-menu">
               <Link to ="/"> <button className="botoes-menu">Início</button ></Link>
               <Link to ="/About"> <button className="botoes-menu">Sobre</button ></Link>
               <Link to ="/curriculo"> <button className="botoes-menu">Curriculo</button ></Link>
            </div>

           <Link to ="/contact"> <button className="botão-contato">Contato</button ></Link>

        </header>
    )
}