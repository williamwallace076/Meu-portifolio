import React from "react";
import "./contact.css"

export default props => {
    return (
        <div className="corpo-contact">
            <div className="glasmorphism-contact">

                <h1 className="message-title">Contate-me</h1>
                <form className="form" >
                    <label for="Nome" >Nome:</label>
                    <input type="Nome" id="Nome" placeholder="Nome"></input> <br />
                    <label for="Email" >Email:</label>
                    <input type="Email" placeholder="Email" /><br />
                    <textarea placeholder="Insira um texto" rows="4" cols="50" ></textarea><br />
                    <input type="submit" className="submit" />
                </form>
            </div>
        </div>
    )
}