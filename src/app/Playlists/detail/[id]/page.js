"use client"
import React from "react";
import './../../playlists.css';
import Link from "next/link";
import axios from "axios";
import {useEffect, useState} from "react";


export default function Detail(props) {
  const idSelecionado = parseInt(props.params.id);

  //const [playlists, setPlaylists] = useState([]);
  const [playlistSelecionada, setPlaylistSelecionada] = useState(null);

    useEffect(() =>{
      
        axios.get(`http://localhost:3001/playlists/${idSelecionado}`).then((result) =>{
          setPlaylistSelecionada(result.data);

        })
    }, []);

  if (!playlistSelecionada) {
    return (
      <>
        <h1>Playlist não encontrada</h1>
      </>
    );
  }




  const podcast = playlistSelecionada.podcast.map((podcast) => (

    <div key={podcast.podId} className='cartao_podcast'>
      <div></div>
      <div className='playlists_nome_podcast'>
        <h2 >{podcast.podNome}</h2>

        <div className='playlists_audio_podcast'>
          <audio controls>
            <source src={podcast.podArquivo} type="audio/mp3" />
            Seu navegador não suporta o elemento de áudio.
          </audio>
        </div>
      </div>
    </div>
  ));


  return (
    <div className='Playlists'>
      <div className='divisoria'>
        <h2>Podcasts: {playlistSelecionada.nome} </h2>
        <h2>Descrição: {playlistSelecionada.descricao}</h2>
        <div className='lista'>
          {podcast}
        </div>
        <div>   
          <Link href ="/Playlists"className="cabecalho__menu__playlists">Voltar</Link>
        </div>
      </div>
    </div>
  )
}