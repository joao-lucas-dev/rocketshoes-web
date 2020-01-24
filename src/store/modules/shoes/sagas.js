import { toast } from 'react-toastify';

import { call, put, all, takeLatest } from 'redux-saga/effects';

import nodeServer from '../../../services/nodeServer';
import { addShoesSuccess } from './actions';

function* addShoes({ payload }) {
  const { url, name, price } = payload;

  const response = yield call(nodeServer.post, '/shoes', { url, name, price });

  put(addShoesSuccess(response.data));

  toast.success('Item adicionado com sucesso!');
}

export default all([takeLatest('@shoes/ADD_REQUEST', addShoes)]);
