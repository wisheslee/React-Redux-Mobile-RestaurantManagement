import React, { Component } from 'react';
import style from '../../../theme/css/ListItem.less';
class ListItem extends Component {
  render() {
    return (
      <div className={style.wrap}>
        <h4>大厅<span>8</span>号桌</h4>
        <table>
          <tbody>
            <tr>
              <td>用餐时间</td>
              <td>3月18日</td>
            </tr>
            <tr>
              <td>用餐人数</td>
              <td>4人</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default ListItem;