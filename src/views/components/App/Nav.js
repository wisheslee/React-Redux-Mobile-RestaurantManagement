import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import style from '../../../theme/css/Nav.less';
class Nav extends Component {
  render() {
    return (
      <nav className={style.wrap}>
        <ul>
          <li>
            <IndexLink to='/' activeClassName={style.active}>
              <i className="fa fa-home fa-fw"></i>
              <p>主页</p>
            </IndexLink>
          </li>
          <li >
            <Link to='/order' activeClassName={style.active}>
              <i className="fa fa-user-md fa-fw"></i>
              <p>我的咨询</p>
            </Link>
          </li>
          <li >
            <Link to='/table' activeClassName={style.active}>
              <i className="fa fa-vcard-o fa-fw"></i>
              <p>健康档案</p>
            </Link>
          </li>
          <li >
            <Link to='/menu' activeClassName={style.active}>
              <i className="fa fa-user-circle-o fa-fw"></i>
              <p>个人中心</p>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;