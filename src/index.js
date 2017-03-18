/**
 * 负责渲染到HTML
 */
import React from 'react'
import { render } from 'react-dom';
import Root from './views/Root.js';
import './theme/css/font-awesome.min.css';
import './index.css';
render(
  <Root />,
  document.querySelector('#root')
)


