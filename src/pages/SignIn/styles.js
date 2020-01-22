import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  width: 500px;
  background: #fff;
  border-radius: 5px;
  margin: auto;
  padding: 30px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  strong {
    font-size: 18px;
    color: #333;
    margin-bottom: 20px;
  }

  span {
    font-size: 14px;
    color: #333;
    margin-top: 20px;

    strong {
      font-size: 14px;
      color: #7159c1;
      margin-left: 5px;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  label {
    font-size: 16px;
    color: #7159c1;
  }

  input {
    width: 300px;
    border: 1px solid #999;
    padding: 10px 15px;
    margin: 10px 0;
  }

  button {
    background: #7159c1;
    color: #fff;
    border: 0;
    border-radius: 4px;

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    margin-top: 10px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.03, '#7159c1')};
    }
  }
`;
