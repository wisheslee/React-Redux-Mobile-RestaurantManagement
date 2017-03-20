import React, { Component } from 'react';
import style from '../../../theme/css/Detail.less';
import Calc from '../Order/Calc.js';
class Detail extends Component {
  render() {
    console.log('detail rerender');
    return (
      <div className={style.wrap} key='1'>
        <p>
          <span>购物车</span>
          <i className='fa fa-trash-o'>&nbsp;清空</i>
        </p>
        <ul>
          {this.props.data.map((item, index) =>
            <li key={index}>
              <span>{item.title}</span>
              <span>￥{item.price}</span>
              <Calc fontSize='100%' num={item.num} name={item.title} price={item.price} />
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default Detail;