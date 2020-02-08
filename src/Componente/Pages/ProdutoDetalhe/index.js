import React, {Component} from 'react';
import api from '../../../Servicos/api';
import './style.css';
import { Link } from 'react-router-dom';

export default class ProdutoDetalhe extends Component{

    state = {
        produto: {}
    }

    async componentDidMount(){
        const { id } = this.props.match.params;
        const response = await api.get(`/produto/${id}`);
        this.setState({ produto: response.data });
    }

    render(){
        const { produto } = this.state;
        return(
            <div className='produto-info'>
                <strong>{produto.titulo}</strong>
                <p>{produto.descricao}</p>
                <p>
                    <a href={produto.url}>{produto.url}</a>
                </p>
                <div className='raiz'>
                    <Link to={'/'}>
                        <button>Voltar</button>
                    </Link>
                </div>
            </div>
        )
    }
}