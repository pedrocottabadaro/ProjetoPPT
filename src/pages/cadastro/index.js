
import React from 'react';

import './style.css'


import api from '../../services/api'




const RegisterScreen = (props)=>{

    const cadastrar=async ()=>{

        const response=await api.post
    }
    
    return (
        <div className="register-background">
            <div className="register-container">

            <h2 id="register-title">Seja um membro</h2>

                <form method="POST" action="/home">
                    <label htmlFor="login">Usuario</label>
                    <input name="login" type="text" id="register-login" required  ></input>

                    <label htmlFor="password">Senha</label>
                    <input name="password" type="password" id="register-password" required ></input>

                    <button value="submit">Cadastrar</button>
                
                </form>

                <div id="register-container-login">
                    <button value="submit" id="register-login" onClick={()=>{

                        window.location.href="/"

                    }}>ja tenho uma conta</button>
                </div>
             </div>
            
        </div>
        
    )}


export default RegisterScreen;