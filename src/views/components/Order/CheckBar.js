import React, { Component } from 'react';
import { Modal } from 'antd-mobile';
import { browserHistory } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import style from '../../../theme/css/CheckBar.less';
import { connect } from 'react-redux';
import { comfirmOrder } from '../../../actions/actions.js';
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
    const alert = Modal.alert;
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
        <span className={style.btn}
          onClick={() => {
            if (priceCount) {
              return alert('确定下单吗？', '', [
                { text: '取消' },
                {
                  text: '确定', onPress: () => {
                    let d = new Date()
                    let min = d.getMinutes().length === 1 ? `0${d.getMinutes()}` : d.getMinutes()
                    let d1 = d.getHours() + ":" + min;
                    this.props.dispatch(comfirmOrder(this.props.orderNum, d1));
                    browserHistory.push('/');
                  }, style: { fontWeight: 'bold' }
                },
              ])
            } else {
              return alert('您还没有选餐哦~', '', [
                { text: '确定', style: { fontWeight: 'bold' } },
              ])
            }
          }}
        >去结算</span>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    data: state.handleOrder
  }
}
export default connect(mapStateToProps)(CheckBar);