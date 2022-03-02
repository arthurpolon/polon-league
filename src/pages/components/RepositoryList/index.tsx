import { Component } from 'react'
import { connect } from 'react-redux'
import { ApplicationState } from 'src/store'
import { bindActionCreators, Dispatch } from 'redux'
import { Repository } from '~store/ducks/repositories/types'
import * as RepositoryActions from '~store/ducks/repositories/actions'

interface StateProps {
  repositories: Repository[]
}

interface DispatchProps {
  loadRequest(): void
}

type Props = StateProps & DispatchProps

class RepositoryList extends Component<Props> {
  componentDidMount(): void {
    const { loadRequest } = this.props

    loadRequest()
  }

  render() {
    const { repositories } = this.props
    return (
      <div>
        {repositories.map((repository) => (
          <h1 key={repository.id}>{repository.name}</h1>
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  repositories: state.repositories.data,
})

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(RepositoryActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(RepositoryList)
