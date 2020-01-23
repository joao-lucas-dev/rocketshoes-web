import React from 'react';
import { connect } from 'react-redux';

import { Container } from './styles';

function Perfil({ history, auth }) {
  function handleBackLogin() {
    history.push('/login');
  }

  if (!auth.admin) {
    return (
      <Container>
        <strong>Suas informações: </strong>

        <div>
          <span>Nome: </span>
          <input type="text" value={auth.name} readOnly />
          <span>E-mail: </span>
          <input type="email" value={auth.email} readOnly />
          <span>Senha: </span>
          <input type="password" value={auth.password} readOnly />

          <button type="button" onClick={handleBackLogin}>
            Sair
          </button>
        </div>
      </Container>
    );
  }

  return <Container />;
}

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Perfil);
