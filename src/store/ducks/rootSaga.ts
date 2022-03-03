import { all, takeLatest } from 'redux-saga/effects'
import { RepositoriesActions } from './repositories/actions'
import { load } from './repositories/sagas'

export default function* rootSaga() {
  return yield all([takeLatest(RepositoriesActions.request, load)])
}
