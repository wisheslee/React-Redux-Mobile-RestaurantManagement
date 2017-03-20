import React, { Component } from 'react';
import { Link } from 'react-router';
import style from '../../../theme/css/BackBtn.less';
class BackBtn extends Component {
  render() {
    return (
      <Link to={this.props.url} className={style.wrap}>
        <i className='fa fa-chevron-left'></i>
      </Link>
    );
  }
}

export default BackBtn;