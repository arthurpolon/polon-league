import { Action, createReducer } from 'typesafe-actions'
import { RepositoriesActions } from './actions'
import { RepositoriesState } from './types'

const INITIAL_STATE: RepositoriesState = {
  data: [],
  loading: null,
  error: null,
}

const reducer = createReducer<RepositoriesState, Action>(INITIAL_STATE)
  .handleAction(RepositoriesActions.request, (store) => ({
    ...store,
    loading: true,
  }))
  .handleAction(RepositoriesActions.success, (store, action) => ({
    ...store,
    loading: false,
    error: false,
    data: action.payload.data,
  }))
  .handleAction(RepositoriesActions.failure, (store) => ({
    ...store,
    loading: false,
    error: true,
    data: [],
  }))

export default reducer
