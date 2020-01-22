import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Form } from './styles';

export default function SignUp() {
  return (
    <Container>
      <strong>Cadastre uma conta</strong>

      <Form>
        <label htmlFor="name">Nome:</label>
        <input type="name" id="name" placeholder="seu nome" />
        <label htmlFor="email">E-mail:</label>
        <input type="email" id="email" placeholder="seu melhor e-mail" />
        <label htmlFor="pass">Senha:</label>
        <input type="password" id="pass" placeholder="sua melhor senha" />

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
