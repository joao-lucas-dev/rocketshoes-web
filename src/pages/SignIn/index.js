import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { bindActionCreators } from 'redux';

import * as AuthActions from '../../store/modules/auth/actions';
import { Container, Form } from './styles';

class SignIn extends Component {
  state = {
    email: '',
    password: '',
  };

  handleLogin = e => {
    const { email, password } = this.state;
    const { signInRequest } = this.props;

    e.preventDefault();

    signInRequest(email, password);
  };

  render() {
    const { email, password } = this.state;

    return (
      <Container>
        <strong>Bem-vindo novamente!</strong>

        <Form onSubmit={this.handleLogin}>
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            placeholder="email@email.com"
            value={email}
            onChange={e => this.setState({ email: e.target.value })}
          />
          <label htmlFor="pass">Senha:</label>
          <input
            type="password"
            id="pass"
            placeholder="*********"
            value={password}
            onChange={e => this.setState({ password: e.target.value })}
          />

          <button type="submit">ENTRAR</button>
        </Form>

        <span>
          Ainda não tem conta?{' '}
          <Link to="/signup">
            <strong>Cadastre-se aqui!</strong>
          </Link>
        </span>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(AuthActions, dispatch);

export default connect(null, mapDispatchToProps)(SignIn);
