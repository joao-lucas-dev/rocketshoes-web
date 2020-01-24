import React, { Component } from 'react';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';

import * as ShoesActions from '../../store/modules/shoes/actions';
import { Container, Box, Form } from './styles';

class Perfil extends Component {
  state = {
    url: '',
    name: '',
    price: '',
  };

  handleAdd = e => {
    e.preventDefault();

    const { addShoesRequest } = this.props;
    const { url, name, price } = this.state;

    addShoesRequest(url, name, price);

    this.setState({ url: '', name: '', price: '' });
  };

  render() {
    const { auth, history } = this.props;
    const { url, name, price } = this.state;

    if (!auth.admin) {
      return (
        <Container>
          <strong>Suas informações: </strong>

          <div>
            <span>Nome: </span>
            <input type="text" value={auth.name} readOnly />
            <span>E-mail: </span>
            <input type="email" value={auth.email} readOnly />

            <button type="button" onClick={() => history.push('/login')}>
              Sair
            </button>
          </div>
        </Container>
      );
    }

    return (
      <Box>
        <Form onSubmit={this.handleAdd}>
          <span>URL da imagem do Tênis: </span>
          <input
            type="url"
            value={url}
            onChange={e => this.setState({ url: e.target.value })}
            placeholder="Ex: http://www.imagem.com.br"
          />
          <span>Nome do Produto: </span>
          <input
            type="text"
            value={name}
            onChange={e => this.setState({ name: e.target.value })}
            placeholder="Ex: Tênis"
          />
          <span>Preço: </span>
          <input
            type="text"
            value={price}
            onChange={e => this.setState({ price: e.target.value })}
            placeholder="Ex: 129.9"
          />

          <button type="submit">Adicionar</button>

          <button type="button" onClick={() => history.push('/login')}>
            Sair
          </button>
        </Form>
      </Box>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(ShoesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Perfil);
