// @jsx h 

import { h } from 'hyperapp'

export default ({ id, title, value, options, render, disabled, style, onChange }) => (state, actions) => {
  if (typeof render === 'function') {
    options = render(state)
  }

  console.log(id, render, state, options)

  return (<div class="form-group">
    <label >{title}</label>
    <select class="form-control" 
            id={id} 
            style={style}
            disabled={disabled ? 'disabled' : ''} 
            onchange={onChange}>
      {
        [].concat('', options).map((option) => (
          <option value={typeof option === 'object' ? option.name : option} 
                  selected={(typeof option === 'object' ? option.name : option) === value ? 'selected' : ''}>
            {typeof option === 'object' ? option.name : option}
          </option>
        ))
      }
    </select>
  </div>)
}
