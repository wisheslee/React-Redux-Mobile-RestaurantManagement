import React, { Component } from 'react';
import Nav from './Nav.js';
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