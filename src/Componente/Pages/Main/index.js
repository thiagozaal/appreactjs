import React, {Component} from 'react';
import api from '../../../Servicos/api';
import { Link } from 'react-router-dom';
import './style.css';

export default class Main extends Component{

    state = {
        docs: [],
        docsInfo: {},
        page: 1,
    }

    componentDidMount(){
        this.loadProducts();
    }

    loadProducts = async (page = 1) => {
        const response = await api.get(`/produto?page=${page}`);
        const { docs, ...docsInfo } = response.data;
        this.setState({ docs, docsInfo, page });
    }

    prevPage = () => {
        const { page } = this.state;
        if( page==1 ) return;
        let pageNumber = page - 1;
        this.loadProducts(pageNumber);
    }

    nextPage = () => {
        const { page, docsInfo } = this.state;
        if( page==docsInfo.pages ) return;
        let pageNumber = page + 1;
        this.loadProducts(pageNumber);
    }

    render(){
        const { docs, docsInfo, page } = this.state;
        return(
            <div className='lista-produto'>
                {docs.map(item => (
                    <article>
                        <strong>{item.titulo}</strong>
                        <p>{item.descricao}</p>
                        <Link to={`/produto/${item._id}`}>Acessar</Link>
                    </article>
                ))}
                <div className='actions'>
                    <button disabled={page==1} onClick={this.prevPage}>Anterior</button>
                    <button disabled={page==docsInfo.pages} onClick={this.nextPage}>Próximo</button>
                </div>
            </div>
        )
    }
}