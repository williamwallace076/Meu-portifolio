import React from "react";
import "./MainProjects.css"
import Cards from "../projects/cards"
import thumbnail1 from "../../assets/img/1.png"
import thumbnail2 from "../../assets/img/2.png"
import thumbnail3 from "../../assets/img/3.png"
import thumbnail4 from "../../assets/img/4.png"
import thumbnail5 from "../../assets/img/5.png"
import thumbnail6 from "../../assets/img/6.png"
import thumbnail7 from "../../assets/img/7.png"
import thumbnail8 from "../../assets/img/8.png"
import thumbnail9 from "../../assets/img/9.png"

export default () => {
    return (
        <main className="corpo-projects">

            <div className="glasmorphism-projects">

                <h1 className="title-projects"> Projetos </h1>
                
                

                <select className="select-category"id="select-category">
                    <option value="select-category" disabled selected>Selecione a categoria</option>
                    <option value="CSS">CSS</option>
                    <option value="HTMl">HTMl</option>
                    <option value="React">React</option>
                    <option value="Agular">Angular</option>
                </select>

                <div className="area-cards">
                    <a href="https://todolist-seven-delta.vercel.app/"> <Cards thumbnail={thumbnail1} titulo={`Lista De Tarefas`} desc={`Sistema TodoList Com React Hooks `}></Cards></a>
                    <a href="https://netflix-clone-swart-sigma.vercel.app/"> <Cards thumbnail={thumbnail2} titulo={`Netflix Clone`} desc={`Clone do site Netflix utilizando React Routes, estilizado com CSS`}></Cards></a>
                    <a href="https://landing-page-theta-rouge.vercel.app/"> <Cards thumbnail={thumbnail3} titulo={`Landing Page Spotfy`} desc={`Landing Page com formulário baseado no site spotfy`}></Cards></a>
                    <a href="https://spotify-clone-eta-three.vercel.app/"> <Cards thumbnail={thumbnail4} titulo={`Spotify Premium clone `} desc={`Clone da Página 'Premium' do site Spotfy`}></Cards></a>
                    <a href="https://flappybirdclone.vercel.app/"> <Cards thumbnail={thumbnail5} titulo={`Flappy Bird Clone`} desc={`Clone do jogo flappy bird utilizando JS para Manipular a Dom`}></Cards></a>
                    <a href="https://marvelpelectionplayer.vercel.app/"> <Cards thumbnail={thumbnail6} titulo={`Selção de player Marvel`} desc={`Menu de selção de personagens com css grid`}></Cards></a>
                    <a href="https://williamwallace076.github.io/Pokedex/"> <Cards thumbnail={thumbnail7} titulo={`Pokedex`} desc={`Pokedex Implementada com JS e estilizada com CSS`}></Cards></a>
                    <a href="https://cronometro-beige.vercel.app/"> <Cards thumbnail={thumbnail8} titulo={`Cronometro`} desc={`Utilizando JS para implementar um Cronometro`}></Cards></a>
                    <a href="https://formulario-teste-one.vercel.app/"> <Cards thumbnail={thumbnail9} titulo={`Projeto HTML Básico`} desc={`Formulario Cadastral simples com HTMl e CSS`}></Cards></a>
                </div>
            </div>

        </main>
    )

}
