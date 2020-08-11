
import React from 'react';
import './style.css'

import api from '../../services/api'

import  {Link} from 'react-router-dom'






const LoginScreen = (props)=>{



    const autenticar=async()=>{

        const valor=verificaUsuario(document.querySelector('input#login-username').value);
        const senha=document.querySelector('input#login-password').value;
        const username=document.querySelector('input#login-username').value;
        const usuario=carregarUsuario(valor);

        

        if(usuario.password!==senha||usuario.username!==username){
            alert("USUARIO OU SENHA INCORRETA");
        }
        else{
            alert("tudo certo");
        }

    }
    
    const carregarUsuario=async(id)=>{

        if(id!=null){

            const response=await api.get(`/register/${id}`);
        
            return response.data

        }

        

    }

    const componentDidMount=()=>{
        this.loadProducts();
    }

    const verificaUsuario=async(name)=>{


       

        const response=await api.get(`/register/username?nome=${name}`);

        
        

        if(response.data!=null){
            return null;
        }
        else{
            return response.data;
        }

    }

    return (
        <div className="login-background">
            <div className="login-container">

                <h2 id="login-title">Projeto ppt</h2>

                <form >
                    <label htmlFor="username">Usuario</label>
                    <input name="username" type="text" id="login-username"  ></input>

                    <label htmlFor="password">Senha</label>
                    <input name="password" type="password" id="login-password"  ></input>

                    
                    
                    <Link to="/main" value="submit">Enter</Link>

                    
                </form>

                <div id="login-container-cadastrar">
                    <Link to="/cadastro" id="login-cadastrar">Cadastrar</Link>
                </div>


            </div>
        </div>
    )
    
}

export default LoginScreen;