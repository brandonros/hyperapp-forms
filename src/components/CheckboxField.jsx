// @jsx h 

import { h } from 'hyperapp'

export default ({ id, title, value, disabled, style, onChange }) => (state, actions) => {
  if (typeof render === 'function') {
    value = render(state)
  }

  return (
    <div class="form-group" key={id}>
      <label >{title}</label>
      <input class="form-control" 
             type="checkbox" 
             id={id} 
             style={style}
             checked={value ? 'checked' : ''} 
             disabled={disabled ? 'disabled' : ''} 
             onchange={onChange} />
    </div>
  )
}
