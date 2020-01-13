import React from 'react';
import { MdShoppingBasket } from 'react-icons/md';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';
import { Container, Cart } from './styles';

export default function Header() {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Rocketshoes" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>3 itens</span>
        </div>
        <MdShoppingBasket size={35} color="#fff" />
      </Cart>
    </Container>
  );
}
