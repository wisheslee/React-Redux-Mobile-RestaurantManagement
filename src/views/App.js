/**
 * 这个文件导出一个根组件，提供给Root.js
 */
import React, { Component } from 'react';
import Nav from './components/App/Nav.js';
import DevTools from './DevTools.js';
import style from '../theme/css/App.less';
class App extends Component {
  render() {
    return (
      <div style={{ height: '100%' }} className={style.wrap}>
        <main>
          {this.props.children}
        </main>
        <div>
          <Nav />
        </div>
      </div>
    );
  }
}
export default App;