import { createAsyncAction } from 'typesafe-actions'
import { RepositoriesTypes, Repository } from './types'

export const RepositoriesActions = {
  ...createAsyncAction(
    [RepositoriesTypes.LOAD_REQUEST, (username: string) => ({ username })],
    [RepositoriesTypes.LOAD_SUCCESS, (data: Repository[]) => ({ data })],
    RepositoriesTypes.LOAD_FAILURE,
  )(),
}
