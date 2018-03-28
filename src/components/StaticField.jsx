// @jsx h 

import { h } from 'hyperapp'

export default ({ id, title, value, render, numeric, positions, style }) => (state, actions) => {
  if (typeof render === 'function') {
    value = render(state)

    if (numeric) {
      value = value.toFixed(positions)
    }
  }
  
  return (
    <div class="form-group" key={id}>
      <label >{title}</label>
      <span class="static-field" style={style} id={id}>{value}</span>
    </div>
  )
}
