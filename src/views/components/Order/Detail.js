import React, { Component } from 'react';
import style from '../../../theme/css/Detail.less';
import Calc from '../Order/Calc.js';
import { connect } from 'react-redux';
import { clearOrder } from '../../../actions/actions.js'
class Detail extends Component {
  handleClear() {
    this.props.dispatch(clearOrder(this.props.orderNum));
  }
  render() {
    return (
      <div className={style.wrap} key='1'>
        <p>
          <span>购物车</span>
          <i className='fa fa-trash-o' onClick={this.handleClear.bind(this)}>&nbsp;清空</i>
        </p>
        <ul>
          {this.props.data.map((item, index) =>
            <li key={index}>
              <span>{item.title}</span>
              <span>￥{item.price}</span>
              <div>
                <Calc fontSize='100%' num={item.num} name={item.title} price={item.price} orderNum={this.props.orderNum} kind={item.kind} />
              </div>

            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default connect()(Detail);