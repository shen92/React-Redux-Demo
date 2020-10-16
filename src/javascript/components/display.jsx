import React, {Component} from 'react';
import {connect} from 'react-redux';

import '../../css/app.css'

class Display extends Component {

  render() {
    console.log(this.props)
    return (
        <div className="displayBox">
          <div className="title">Count and Read</div>
          <div className="count">{this.props.counter.count}</div>
          <div className="read">{this.props.reader.read}</div>
        </div>
    );
  }
}

export default connect(state => state)(Display);