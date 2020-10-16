import React, {Component} from 'react';
import {connect} from "react-redux";
import {read} from "../redux/actions";

import '../../css/app.css'

class Read extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
    this.onButtonClick = this.onButtonClick.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(e) {
    const input = e.currentTarget.value;
    this.setState({input});
  }

  onButtonClick() {
    this.props.read(this.state.input);
  }

  render() {
    return (
        <div className="displayBox">
          <div className="title">Type and submit</div>
          <input type="text" placeholder="Type here..." onChange={this.onInputChange}/>
          <div className="button" onClick={this.onButtonClick}>Submit</div>
        </div>
    );
  }
}

export default connect(null, {read})(Read);