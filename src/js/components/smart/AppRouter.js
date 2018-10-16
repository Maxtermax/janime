import React from 'react'
import { Router, Route, Switch, StaticRouter } from 'react-router'
import { createBrowserHistory } from 'history'
import Routes from './Routes.js'
import { connect } from 'react-redux'

@connect(store => {
  let AppRouter = store.AppRouter;
  return { ...AppRouter }
})
class AppRouter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { store } = this.props;
    const history = createBrowserHistory();
    return (
      <div>
        <Router history={history}>
          <Switch>
            <Routes />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default AppRouter
