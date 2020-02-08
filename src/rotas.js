import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from './Componente/Pages/Main';
import ProdutoDetalhe from './Componente/Pages/ProdutoDetalhe/index';

const Rotas = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Main}/>
            <Route exact path='/produto/:id' component={ProdutoDetalhe}/>
        </Switch>
    </BrowserRouter>
);

export default Rotas;