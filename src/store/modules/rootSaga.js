import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import cart from './cart/sagas';
import shoes from './shoes/sagas';

export default function* rootSaga() {
  return yield all([cart, auth, shoes]);
}
