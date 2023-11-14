import React from "react";
import Link from "next/link";
import './componentes.css';

function Header() {
    return (
        <header className="cabecalho">
             <nav className="cabecalho__menu">
                    <Link href ="/Inicio" className="cabecalho__menu__link">Inicio</Link>
                    <Link href ="/Cadastro" className="cabecalho__menu__link">Cadastro</Link>
                    <Link href ="/Faq"className="cabecalho__menu__link">FAQ</Link>
                    <Link href ="/Playlists"className="cabecalho__menu__link">Playlists</Link>
                    {/* <Link href ="/Teste"className="cabecalho__menu__link">Teste</Link> */}
                    <Link href ="/Login"className="cabecalho__menu__login">Login</Link>

                </nav>
        </header>

    );
}

export default Header;
