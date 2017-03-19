import React, { Component } from 'react';
import style from '../../../theme/css/SideBar.less';
class Sidebar extends Component {
  constructor(props) {
    super();
    this.state = {
      currentIndex: 0
    }
  }
  checkTitleIndex(index) {
    return index === this.state.currentIndex ? style.active : ''
  }
  render() {
    return (
      <sidebar className={style.wrap}>
        <ul>
          {this.props.data.map((item, index) =>
            <li key={index} onClick={() => { this.setState({ currentIndex: index }) }} className={this.checkTitleIndex(index)}>{item}</li>
          )}
        </ul>
      </sidebar >
    );
  }
}

export default Sidebar;