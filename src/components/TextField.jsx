// @jsx h 

import { h } from 'hyperapp'

export default = ({ id, title, value, disabled, style, onChange }) => (state, actions) => (
  <div class="form-group">
    <label >{title}</label>
    <input class="form-control" 
           type="text" 
           id={id} 
           value={value} 
           onkeyup={onChange} 
           style={style}
           disabled={disabled ? 'disabled' : ''} />
  </div>
)
