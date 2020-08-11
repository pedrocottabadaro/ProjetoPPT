
import React from 'react';

import './style.css'


import api from '../../services/api'
import { Link } from 'react-router-dom';




const RegisterScreen = (props)=>{

    const cadastrar=async ()=>{

        const response=await api.post
    }
    
    return (
        <div className="register-background">
            <div className="register-container">

            <h2 id="register-title">Seja um membro</h2>

                <form >
                    <label htmlFor="login">Usuario</label>
                    <input name="login" type="text" id="register-login"   ></input>

                    <label htmlFor="password">Senha</label>
                    <input name="password" type="password" id="register-password"  ></input>

                    <Link to='/'>Cadastrar</Link>
                
                </form>

                <div id="register-container-login">
                    <Link to='/' value="submit" id="register-login">ja tenho uma conta</Link>
                </div>
             </div>
            
        </div>
        
    )}


export default RegisterScreen;