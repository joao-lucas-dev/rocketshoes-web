import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Form } from './styles';

export default function SignIn() {
  return (
    <Container>
      <strong>Bem-vindo novamente!</strong>

      <Form>
        <label htmlFor="email">E-mail:</label>
        <input type="email" id="email" placeholder="email@email.com" />
        <label htmlFor="pass">Senha:</label>
        <input type="password" id="pass" placeholder="*********" />

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
