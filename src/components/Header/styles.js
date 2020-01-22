import { Link } from 'react-router-dom';

import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0;
`;

export const RightSide = styled.div`
  display: flex;
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2s;
  margin-right: 10px;

  @media (max-width: 425px) {
    display: none;
  }

  &:hover {
    opacity: 0.6;
  }

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #fff;
    }

    span {
      font-size: 12px;
      color: #999;
    }
  }
`;

export const Perfil = styled(Link)`
  &:hover {
    opacity: 0.6;
  }

  @media (max-width: 425px) {
    display: none;
  }
`;
