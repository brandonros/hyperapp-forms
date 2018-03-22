// @jsx h 

import { h } from 'hyperapp'

export default ({ id, title, value, style }) => (state, actions) => {
  if (typeof value === 'function') {
    value = value(state)
  }
  
  return (<div class="form-group">
    <label >{title}</label>
    <span class="static-field" style={style} id={id}>{value}</span>
  </div>)
}
