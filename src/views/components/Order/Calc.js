import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFood, minusFood } from '../../../actions/actions.js'
class CalcContainer extends Component {
  static defaultProps = {
    fontSize: '130%',
    num: 0
  }
  constructor(props) {
    super(props);
    this.state = {
      num: this.props.num
    }
  }
  handleAdd() {
    if (this.state.num >= 0) {
      this.props.dispatch(addFood(this.props.name, this.props.price));
      this.setState({
        num: this.state.num + 1
      })
    }
  }
  handleMinus() {
    if (this.state.num > 0) {
      this.props.dispatch(minusFood(this.props.name));
      this.setState({
        num: this.state.num - 1
      })
    }
  }
  render() {
    const divStyle = {
      display: 'flex',
      alignContent: 'flex-end',
      justifyContent: 'center',
      paddingBottom: '10px',
      fontSize: this.props.fontSize,
      width: '100%'
    }
    return (
      <div style={divStyle}>
        {this.state.num ?
          <p onClick={() => this.handleMinus()}>
            <i className='fa fa-minus-circle' style={{ color: '#333', fontSize: this.props.fontSize, padding: '0 10px' }}></i>
          </p> :
          <p onClick={() => this.handleMinus()}>
            <i className='fa fa-minus-circle' style={{ color: '#333', fontSize: this.props.fontSize, padding: '0 10px', visibility: 'hidden' }}></i>
          </p>
        }
        {this.state.num ?
          <p>{this.state.num}</p> :
          <p style={{ visibility: 'hidden' }}>{this.state.num}</p>
        }
        <p onClick={() => this.handleAdd()}>
          <i className='fa fa-plus-circle' style={{ color: '#108ee9', fontSize: this.props.fontSize, padding: '0 10px' }}></i>
        </p>
      </div>
    )

  }
}
export default connect()(CalcContainer);