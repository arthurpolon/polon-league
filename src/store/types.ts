import { Store } from 'redux'
import { Task } from 'redux-saga'

export interface ISagaStore extends Store {
  sagaTask?: Task
}
