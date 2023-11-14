"use client"

import React from 'react';
import './usuario.css';
import Link from "next/link";


function UsuarioPage() {


  try {
    const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));

    

      return (
        <div className='cadastro'>
          <main className="container_cadastro" >
            <div className="centralizado">
              <h1 className="cad1">Bem-vindo, {usuarioLogado.nome}</h1>
              <Link href ="/Login"className="cabecalho__menu__login">Deslocar</Link>
            </div>
          </main>
        </div>
      );
    } catch (error) {
      // O usuário não existe
      // Exibe uma mensagem de erro
      return (

        <div className='cadastro'>
          <main className="container_cadastro" >
            <div className="centralizado">
              <h1 className="cad1">Usuário não existe</h1>
            </div>
            <div>
            <h5 >
              <Link href ="/Login"className="cabecalho__menu__login">Voltar</Link>
              </h5>
            </div>
          </main>
        </div>
      );
    }





  }

export default UsuarioPage;