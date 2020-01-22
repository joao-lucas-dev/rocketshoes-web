import React from 'react';
import { MdPerson, MdShoppingBasket } from 'react-icons/md';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';
import { Container, RightSide, Cart, Perfil } from './styles';

function Header({ cartSize }) {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Rocketshoes" />
      </Link>

      <RightSide>
        <Cart to="/cart">
          <div>
            <strong>Meu carrinho</strong>
            <span>{cartSize} itens</span>
          </div>
          <MdShoppingBasket size={35} color="#fff" />
        </Cart>
        <Perfil to="/login">
          <MdPerson size={40} color="#fff" />
        </Perfil>
      </RightSide>
    </Container>
  );
}

export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);
