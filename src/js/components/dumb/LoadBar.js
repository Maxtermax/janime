const React = require('react');

class LoadBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { display = true, id = '' } = this.props;
    return (
      <div className={` load-bar ${display ? 'appear' : 'disappear' }`}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    )
  }
}

module.exports = LoadBar;
