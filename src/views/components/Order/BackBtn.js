import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import style from '../../../theme/css/BackBtn.less';
class BackBtn extends Component {
  handleClick() {
    browserHistory.goBack();
  }
  render() {
    return (
      <span className={style.wrap} onClick={this.handleClick.bind(this)}>
        <i className='fa fa-chevron-left'></i>
      </span>
    );
  }
}

export default BackBtn;