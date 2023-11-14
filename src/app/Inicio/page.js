import React from 'react';
import './Inicio.css';
import ImageFoto from './../img/foto.svg';
import ImageBoca from './../img/boca1.svg';
import Image from 'next/image';

function Homepage() {
    return (
        <div className='inicio'>
          
            <main className="apresentacao">
                <section className="apresentacao__podcast">
                    <Image className="imagem__pessoas" src={ImageFoto} alt="Imagem de pessoas" />
                    <div className="podcast__info">
                        <Image className="boca__1" src={ImageBoca} alt="Imagem da boca" />
                        <p className="podcast__subtitulo__texto boca__texto">
                            o seu site <br />para ouvir<br />todo tipo de <br />podcast
                        </p>
                        <h1 className="podcast__nome">FALA <br />QUE EU <br />TE ESCUTO</h1>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Homepage;