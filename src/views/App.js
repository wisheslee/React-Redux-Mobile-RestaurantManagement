/**
 * 这个文件导出一个根组件，提供给Root.js
 */
import React, { Component } from 'react';
import Nav from './components/App/Nav.js';
class App extends Component {
  render() {
    return (
      <div style={{ height: '100%' }}>
        <main>
          {this.props.children}
        </main>
        <Nav />
      </div>
    );
  }
}
export default App;