// Action Type
export enum RepositoriesTypes { // eslint-disable-line
  LOAD_REQUEST = '@repositories/LOAD_REQUEST',
  LOAD_SUCCESS = '@repositories/LOAD_SUCCESS',
  LOAD_FAILURE = '@repositories/LOAD_FAILURE',
}

// Data Type
export interface Repository {
  id: number
  name: string
}

// State / Reducer Type
export interface RepositoriesState {
  readonly data: Repository[]
  readonly loading: boolean
  readonly error: boolean
}
