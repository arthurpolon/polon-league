import { call, put } from 'redux-saga/effects'
import api from '~services/api'
import { RepositoriesActions } from './actions'

export function* load(action: ReturnType<typeof RepositoriesActions.request>) {
  try {
    const response = yield call(
      api.get,
      `users/${action.payload.username}/repos`,
    )

    yield put(RepositoriesActions.success(response.data))
  } catch (err) {
    yield put(RepositoriesActions.failure())
  }
}
