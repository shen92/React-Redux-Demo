import React, {Component} from 'react';
import {connect} from 'react-redux';
import {count} from "../redux/actions";

import '../../css/app.css'

class Increment extends Component {
  constructor(props) {
    super(props);
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick() {
    this.props.count('INCREMENT');
  }

  render() {
    return (
        <div className="displayBox">
          <div className="title">Click the button to increase the counter by 1</div>
          <div className="button" onClick={this.onButtonClick}>Increase</div>
        </div>
    );
  }
}

export default connect(null, {count})(Increment);