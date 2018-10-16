import React from 'react'
import { Route } from 'react-router'
import InjectChildComponent from './Inject.js'
let routes = require('./pages.json');

class Routes extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return routes.map((route, index) => {
      return <Route key={index} {...route } component={this.props[route.component]} />
    })
  }
}

export default InjectChildComponent(Routes, routes.map(route => `./${route.component}.js`));
