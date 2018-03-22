// @jsx h 

import { h } from 'hyperapp'

export default ({ id, title, value, render, style }) => (state, actions) => {
  if (typeof render === 'function') {
    value = render(state)
  }
  
  return (
    <div class="form-group">
      <label >{title}</label>
      <span class="static-field" style={style} id={id}>{value}</span>
    </div>
  )
}
