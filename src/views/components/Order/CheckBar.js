import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import style from '../../../theme/css/CheckBar.less';
import { connect } from 'react-redux';
import Detail from './Detail.js';
class CheckBar extends Component {
  constructor(props) {
    super();
    this.state = {
      detailShow: false
    }
  }

  handleDetailClick() {
    this.setState({
      detailShow: !this.state.detailShow
    })
    console.log(this.state.detailShow);
  }
  render() {
    const { data, orderNum } = this.props;
    const data1 = data[orderNum].data;
    let data2 = [];
    for (let item of data1) {
      for (let item1 of item.content) {
        if (item1.num) {
          let temp = Object.assign({}, item1);
          temp['kind'] = item.title;
          data2.push(temp);
        }
      }
    }
    let priceCount = 0;
    for (let item of data2) {
      priceCount += item.num * item.price
    }
    return (
      <div className={priceCount ? style.active : style.normal}>
        <ReactCSSTransitionGroup
          transitionName='detail'
          transitionEnterTimeout={200}
          transitionLeaveTimeout={200}
          component='div'>
          {
            this.state.detailShow &&
            <Detail data={data2} orderNum={orderNum} />
          }
        </ReactCSSTransitionGroup>
        <p onClick={() => { this.handleDetailClick() }}>
          <span>
            <i className='fa fa-shopping-cart'></i>
          </span>
          应付款：￥<span className={style.price}>{priceCount}</span>元
        </p>
        <span className={style.btn}>去结算</span>
      </div>
    );
  }
}
function mapStateToProps(state) {
  // const data = [];
  // for (let item of state.handleOrder) {
  //   if (item.num > 0) {
  //     data.push(item)
  //   }
  // }
  return {
    data: state.handleOrder
  }
}
export default connect(mapStateToProps)(CheckBar);