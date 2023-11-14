"use client"
import React from 'react';
import './playlists.css';
import axios from "axios";
import Link from 'next/link';
import {useEffect, useState} from "react";


function Playlists() {

    const [playlists, setPlaylists] = useState([]);

    useEffect(() =>{
        axios.get("http://localhost:3001/playlists").then((result) =>{
            setPlaylists(result.data);

        })

    })

    const playlistsFormat = playlists.map((playlist) => {
        return (
            <Link href={`/Playlists/detail/${playlist.id}`}>
                
                <div className='cartao'>
                    <div className='container__playlists_left'>
                        <img src={playlist.capa} className='playlists_imagem' alt='...' />
                        <div className=''>
                            <p className='playlists_nome'>{playlist.nome}</p>
                        </div>
                    </div>
                </div>
            </Link>
        )

    });

    return (
        <div className='Playlists'>
            <div className='divisoria'>
                <h2>Podcasts</h2>
                <div className='lista'>
                    {playlistsFormat}
                </div>
            </div>
        </div>
    )
}

export default Playlists;

