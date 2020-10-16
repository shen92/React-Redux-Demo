import React, {Component} from 'react';
import {connect} from 'react-redux';
import {count} from "../redux/actions";

import '../../css/app.css'

class Decrement extends Component {
  constructor(props) {
    super(props);
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick() {
    this.props.count('DECREMENT');
  }

  render() {
    return (
        <div className="displayBox">
          <div className="title">Click the button to decrease the counter by 1</div>
          <div className="button" onClick={this.onButtonClick}>Decrease</div>
        </div>
    );
  }
}

export default connect(null, {count})(Decrement);