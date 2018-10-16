import React from 'react'
import { Link } from 'react-router-dom'

class Foo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Link to={'/'}>GO TO MAIN</Link>
      </div>
    )
  }
}

export default Foo;
