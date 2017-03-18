import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import style from '../../../theme/css/Nav.less';
class Nav extends Component {
  render() {
    return (
      <nav className={style.wrap}>
        <ul>
          <li >
            <IndexLink to='/' activeClassName={style.active}>
              <i className="fa fa-file-text"></i>
              <p>订单管理</p>
            </IndexLink>
          </li>
          <li>
            <Link to='/order' activeClassName={style.active}>
              <i className="fa  fa-paper-plane-o"></i>
              <p>下单</p>
            </Link>
          </li>
          <li >
            <Link to='/table' activeClassName={style.active}>
              <i className="fa fa-desktop"></i>
              <p>桌台管理</p>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;