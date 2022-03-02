import { createWrapper } from 'next-redux-wrapper'
import { applyMiddleware, createStore, Middleware, Store } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import createSagaMiddleware from 'redux-saga'
import { RepositoriesState } from './ducks/repositories/types'
import rootReducer from './ducks/rootReducer'
import rootSaga from './ducks/rootSaga'
import { ISagaStore } from './types'

export interface ApplicationState {
  repositories: RepositoriesState
}

const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware()
  // Create store
  const store: ISagaStore = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware)),
  )

  store.sagaTask = sagaMiddleware.run(rootSaga)
  // Return store
  return store
}

export const wrapper = createWrapper(makeStore, { debug: false })
