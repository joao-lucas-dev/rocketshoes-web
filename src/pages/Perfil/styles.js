import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  width: 500px;
  background: #fff;
  border-radius: 5px;
  margin: auto;
  padding: 30px;

  strong {
    font-size: 18px;
    color: #333;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-top: 20px;

    span {
      font-size: 16px;
      color: #7159c1;
      margin: 10px 0;
    }

    input {
      border: 0;
      border-bottom: 1px solid #eee;
      padding: 10px 5px;
      margin-bottom: 10px;
      color: #999;
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
  }
`;

export const Box = styled.div`
  width: 500px;
  background: #fff;
  border-radius: 5px;
  margin: auto;
  padding: 30px;

  strong {
    font-size: 18px;
    color: #333;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  label {
    margin-bottom: 20px;
    border: 1px dashed #ddd;
    background-size: cover;
    cursor: pointer;
    height: 400px;

    display: flex;
    justify-content: center;
    align-items: center;

    input {
      display: none;
    }
  }

  span {
    font-size: 16px;
    color: #7159c1;
    margin: 10px 0;
  }

  input {
    border: 0;
    border-bottom: 1px solid #eee;
    padding: 10px 5px;
    margin-bottom: 10px;
  }

  button {
    background: #7159c1;
    color: #fff;
    border: 0;
    border-radius: 4px;

    & + button {
      border: 1px solid #7159c1;
      color: #7159c1;
      background: #fff;

      &:hover {
        background: #7159c1;
      }
    }

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    margin-top: 10px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.03, '#7159c1')};
      color: #fff;
    }
  }
`;
