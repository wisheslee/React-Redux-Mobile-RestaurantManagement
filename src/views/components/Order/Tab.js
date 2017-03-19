import React, { Component } from 'react';
import style from '../../../theme/css/Tab.less';
class Tab extends Component {
  constructor(props) {
    super();
    this.state = {
      currentIndex: 0
    }
  }
  checkTitleIndex(index) {
    return index === this.state.currentIndex ? style.active : ''
  }
  checkContentIndex(index) {
    return index === this.state.currentIndex ? style.contentShow : style.contentHidden
  }
  render() {
    return (
      <div className={style.wrap}>
        <ul>
          {this.props.data.map((item, index) =>
            <li key={index} onClick={() => { this.setState({ currentIndex: index }) }} className={this.checkTitleIndex(index)}>{item['title']}</li>
          )}
        </ul>
        <div>
          {this.props.data.map((item, index) =>
            <div key={index} className={this.checkContentIndex(index)}>
              {item.content.map((item, index) =>
                <div key={index} className={style.panel}>
                  <div>
                    <img src={item.url} alt="" />
                  </div>
                  <div>
                    <p>{item.title}</p>
                    <p className={style.price}>￥{item.price}</p>
                  </div>
                  <div>
                    <p><i className='fa fa-minus-circle' style={{ color: '#333' }}></i></p>
                    <p>1</p>
                    <p><i className='fa fa-plus-circle'></i></p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div >
    );
  }
}

export default Tab;