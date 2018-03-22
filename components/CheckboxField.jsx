// @jsx h 

import { h } from 'hyperapp'

export default ({ id, title, value, disabled, style, onChange }) => (state, actions) => (
  <div class="form-group">
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
