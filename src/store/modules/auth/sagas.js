import { toast } from 'react-toastify';

import { call, put, all, takeLatest } from 'redux-saga/effects';

import history from '../../../services/history';
import nodeServer from '../../../services/nodeServer';
import { userSuccess } from './actions';

function* signIn({ payload }) {
  const { email, password } = payload;

  try {
    const response = yield call(nodeServer.post, '/sessions', {
      email,
      password,
    });

    const { user } = response.data;

    yield put(userSuccess(user));

    toast.success('Logado com sucesso!');

    history.push('/perfil');
  } catch (err) {
    toast.error('Erro ao logar usuário!');
  }
}

function* signUp({ payload }) {
  const { name, email, password } = payload;

  try {
    const response = yield call(nodeServer.post, '/users', {
      name,
      email,
      password,
    });

    yield put(userSuccess(response.data));

    toast.success('Usuário criado com sucesso!');

    history.push('/perfil');
  } catch (err) {
    toast.error('Erro ao criar usuário!');
  }
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);
