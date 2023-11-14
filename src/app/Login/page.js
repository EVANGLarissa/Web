"use client"

import React from 'react';
import './login.css';
import {useState} from "react";
import {validEmail, validPassword} from './../utils/regex';
import Link from "next/link";
import axios from "axios";
import {useRouter} from "next/navigation";

function CadastroPage() {
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();

    const [emailErr, setEmailErr] = useState(false);
    const [senhaErr, setSenhaErr] = useState(false);

    const router = useRouter();

    const validate = () => {
        if(!validEmail.test(email)) {
            setEmailErr(true)
        }else{
            setEmailErr(false)
        }

        if(!validPassword.test(senha)) {
            setSenhaErr(true)
        }else{
            setSenhaErr(false)
        }
    }

function handleSubmit(e){
    e.preventDefault();

    // Verifique se os campos estão vazios
  if (!email || !senha) {
    // Mostre o erro
    setEmailErr(true);
    setSenhaErr(true);
    return;
  }

  // Valide os campos
  validate();

   // Se os campos forem válidos, faça a requisição para o servidor
  if (!emailErr && !senhaErr) {  
        axios.get(`http://localhost:3001/users?email=${email}`).then((res)=>{
            const usuario = res.data[0];
            
             // Se o login e a senha estiverem corretos, redirecione para a página /Usuario
            if (usuario.email === email && usuario.senha === senha) {
                localStorage.setItem("usuarioLogado",JSON.stringify(usuario));
                router.push(`/Usuario`);
            } else {
                // Se o login estiver correto, mas a senha estiver errada, mostre o erro
                setSenhaErr(true);
              }
        })
    }
}
   

    return (
        <div className='cadastro'>
            <main className="container_cadastro" >
                <div className="centralizado">
                    <p className="cad1">Login</p>
                </div>
                <div className="centralizado">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <p className="texto-negrito">Email</p>
                            <input type="email" 
                            required value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            className="txtEmail" 
                            placeholder="Insira seu email" />
                            {emailErr && <p>Por favor digite um email valido</p>}
                        </div>
                        <div>
                            <p className="texto-negrito-senha">Senha</p>
                            <input type="password" 
                            required value={senha} 
                            onChange={(e) => setSenha(e.target.value)} 
                            data-password={senha}
                            className="txtEmail" 
                            placeholder="Insira sua senha" />
                            {senhaErr && <p>Por favor digite uma senha valido</p>}
                        </div>
                        <div>
                        
                            <button type="submit" onClick={validate} className="logar-se">Logar</button>
                            
                        </div>
                        <div>
                            <h5 >
                                Não tem uma conta? <Link href="/Cadastro" className='login_cadastro'>Inscrever</Link>
                            </h5>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
}

export default CadastroPage;