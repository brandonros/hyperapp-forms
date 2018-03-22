// @jsx h 

import { h } from 'hyperapp'

export default ({ id, title, value, disabled, render, style, onChange }) => (state, actions) => {
  if (typeof render === 'function') {
    console.log(render, render(state))
    value = render(state)
  }

  return (
    <div class="form-group" key={id}>
      <label >{title}</label>
      <input class="form-control" 
             type="number" 
             id={id} 
             value={value} 
             style={style}
             disabled={disabled ? 'disabled' : ''} 
             oninput={onChange} />
    </div>
  )
}
