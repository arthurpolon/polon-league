import { Component } from 'react'
import { connect } from 'react-redux'
import { ApplicationState } from 'src/store'
import { bindActionCreators, Dispatch } from 'redux'
import { RepositoriesState } from '~store/ducks/repositories/types'
import { RepositoriesActions } from '~store/ducks/repositories/actions'

interface StateProps {
  repositories: RepositoriesState
}

interface DispatchProps {
  request(username: string): void
}

type Props = StateProps & DispatchProps

class RepositoryList extends Component<Props> {
  componentDidMount(): void {
    const { request } = this.props

    request('arthurpolon')
  }

  render() {
    const { repositories } = this.props

    const status = () => {
      if (repositories.loading) {
        return 'loading'
      }

      if (repositories.error) {
        return 'error'
      }

      return 'success'
    }

    const content = {
      loading: <h1>Loading...</h1>,
      error: <h1>An error ocurred</h1>,
      success: (
        <div>
          {repositories.data.map((repository) => (
            <h1 key={repository.id}>{repository.name}</h1>
          ))}
        </div>
      ),
    }

    return content[status()]
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  repositories: state.repositories,
})

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(RepositoriesActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(RepositoryList)
