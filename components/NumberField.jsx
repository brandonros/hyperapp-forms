// @jsx h 

import { h } from 'hyperapp'

export default ({ id, title, value, disabled, style, onChange }) => (state, actions) => (
  <div class="form-group">
    <label >{title}</label>
    <input class="form-control" 
           type="number" 
           id={id} 
           value={value} 
           style={style}
           disabled={disabled ? 'disabled' : ''} 
           onkeyup={onChange} />
  </div>
)
