// @jsx h 

import { h } from 'hyperapp'

export default ({ id, title, value, disabled, style, render, onChange }) => (state, actions) => {
  if (typeof render === 'function') {
    value = render(state)
  }

  return (
    <div class="form-group" key={id}>
      <label >{title}</label>
      <input class="form-control" 
             type="text" 
             id={id} 
             value={value} 
             oninput={onChange} 
             style={style}
             disabled={disabled ? 'disabled' : ''} />
    </div>
  )
}
