import React, { useState } from 'react';
import './cadastro.css';
import ImageCadastro from './../img/foto.png';
import Image from 'next/image';
import { validEmail, validPassword } from './../utils/regex';
import Link from "next/link";
import fs from 'fs';


function CadastroPage() {
    const [usuario, setUsuario] = useState({
        nome: '',
        email: '',
        senha: '',
    });

    const [nomeErr, setNomeErr] = useState(false);
    const [emailErr, setEmailErr] = useState(false);
    const [senhaErr, setSenhaErr] = useState(false);

    const validate = () => {
        if (!validNome.test(usuario.nome)) {
            setNomeErr(true);
        } else {
            setNomeErr(false);
        }

        if (!validEmail.test(usuario.email)) {
            setEmailErr(true);
        } else {
            setEmailErr(false);
        }

        if (!validPassword.test(usuario.senha)) {
            setSenhaErr(true);
        } else {
            setSenhaErr(false);
        }    };

    const handleCadastro = (e) => {
        e.preventDefault();
        // validate();

        // Se não houver erros de validação, adiciona o usuário ao vetor de usuários
        if (!nomeErr && !emailErr && !senhaErr) {
            // Adiciona o novo usuário ao vetor existente
            const novoUsuario = {
                nome: usuario.nome,
                email: usuario.email,
                senha: usuario.senha,
            };

            axios.post('http://localhost:3001/users', novoUsuario).then(resposta => console.log(resposta.data))
                .catch(function (error) {
                console.log(error);
                });

            // const dbPath = 'data/db.json';

            // try {
            //     // Lê o conteúdo do arquivo db.json
            //     const data = fs.readFileSync(dbPath, 'utf-8');

            //     // Faz o parse do conteúdo para um objeto JavaScript
            //     const db = JSON.parse(data);

            //     // Adiciona o novo usuário ao vetor de usuários
            //     db.users.push(novoUsuario);

            //     // Escreve o novo conteúdo de volta no arquivo
            //     fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));

            //     // Limpa os campos após o cadastro
            //     setUsuario({
            //         nome: '',
            //         email: '',
            //         senha: '',
            //     });

            //     console.log('Novo usuário cadastrado:', novoUsuario);
            // } catch (error) {
            //     console.error('Erro ao atualizar o arquivo db.json:', error);
            // }
        }
    };
    return (
        <div className='cadastro'>
            <main className="container_cadastro" >
                <div className="centralizado">
                    <p className="cad1">CADASTRO</p>
                </div>
                <div className="centralizado">
                    <Image className="imagem__cadastro" src={ImageCadastro} alt="Cadastro" />
                </div>
                <div className="centralizado">

                    <form onSubmit={handleSubmit}>
                        <div>
                            <button type="button" href="#" className="btm__facebook">
                                Inscrever-se com o Facebook
                            </button>
                        </div>
                        <div>
                            <button type="button" href="#" className="btm__google">
                                Inscrever-se com o Google
                            </button>
                        </div>
                        <div>
                            <p>______________________ ou ______________________</p>
                        </div>
                        <div>
                            <p className="texto-negrito">Qual é o seu email?</p>
                        </div>
                        <div>
                            <input type="text" onChange= { (e)=> setEmail(e.target.value) } className="txtEmail" placeholder="Insira seu email"required />
                            
                        </div>
                        <div>
                            <p className="texto-negrito-senha">Crie sua senha?</p>
                        </div>
                        <div>
                            <input type="password" onChange={ (e)=> setSenha(e.target.value)} className="txtEmail" placeholder="Insira sua senha" required/>
                        </div>
                        <div>
                            <input type="submit" href="#" onClick={handleCadastro} className="inscrever-se" value="Inscreva-se"/>
                        </div>
                        <div>
                            <h5>
                                Já tem uma conta? <a href="#">Faça login</a>
                            </h5>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
}