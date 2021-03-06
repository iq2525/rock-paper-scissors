import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MainSection from '../components/MainSection'
import NewGame from '../components/NewGame'
import * as GameActions from '../actions/game'
import './App.scss'

class App extends Component {
  render() {
    const { game, actions } = this.props
    return (
      <div>
        <Header/>
        <MainSection game={game} actions={actions} />
        <NewGame game={game} actions={actions}/>
        <Footer/>
      </div>
    )
  }
}

App.propTypes = {
  game: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    game: state.game
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(GameActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
