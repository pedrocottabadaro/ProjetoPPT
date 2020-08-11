
import React from 'react'
import RegisterScreen from './pages/cadastro/index'
import LoginScreen from './pages/login/index'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Main from './pages/main/index'



const Routes=()=>(

    <BrowserRouter>
        <Switch>
    /*
        <Route exact path="/" component={LoginScreen}/>
        <Route exact path="/cadastro" component={RegisterScreen}/>
        <Route exact path="/main" component={Main}/>
        */
    <Route exact path="/" component={Main}/>


        </Switch>
    
    </BrowserRouter>
);


export default Routes;
