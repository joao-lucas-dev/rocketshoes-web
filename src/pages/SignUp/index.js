import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { bindActionCreators } from 'redux';

import * as AuthActions from '../../store/modules/auth/actions';
import { Container, Form } from './styles';

class SignUp extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleSubmit = e => {
    e.preventDefault();

    const { name, email, password } = this.state;
    const { signUpRequest } = this.props;

    signUpRequest(name, email, password);
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <Container>
        <strong>Cadastre uma conta</strong>

        <Form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Nome:</label>
          <input
            type="name"
            id="name"
            placeholder="seu nome"
            value={name}
            onChange={e => this.setState({ name: e.target.value })}
          />
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            placeholder="seu melhor e-mail"
            value={email}
            onChange={e => this.setState({ email: e.target.value })}
          />
          <label htmlFor="pass">Senha:</label>
          <input
            type="password"
            id="pass"
            placeholder="sua melhor senha"
            value={password}
            onChange={e => this.setState({ password: e.target.value })}
          />

          <button type="submit">CADASTRAR</button>
        </Form>

        <span>
          Já tem conta?
          <Link to="/login">
            <strong>Entre aqui!</strong>
          </Link>
        </span>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(AuthActions, dispatch);

export default connect(null, mapDispatchToProps)(SignUp);
