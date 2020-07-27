
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

        console.log("batata");
        console.log(usuario.password);
        console.log("entrou");

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
                    <input name="username" type="text" id="login-username"  required></input>

                    <label htmlFor="password">Senha</label>
                    <input name="password" type="password" id="login-password" required ></input>

                    <button onClick={()=>{

                       
                        autenticar();



                    }}>teste</button>
                    
                    <button value="submit">Enter</button>

                    
                </form>

                <div id="login-container-cadastrar">
                    <button value="submit" id="login-cadastrar" onClick={(e)=>{

                        e.preventDefault();
                        window.location.href="/cadastro"

                    }}>Cadastrar</button>
                </div>


            </div>
        </div>
    )
    
}

export default LoginScreen;