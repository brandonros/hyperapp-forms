// @jsx h 

import { h } from 'hyperapp'

import StaticField from './StaticField.jsx'
import TextField from './TextField.jsx'
import CheckboxField from './CheckboxField.jsx'
import NumberField from './NumberField.jsx'
import SelectField from './SelectField.jsx'

export default ({ id, type, title, value, options, disabled, style, render, onChange }) => (state, actions) => {
  console.log(render)
  
  if (type === 'static') {
    return <StaticField id={id} 
                        title={title} 
                        value={value}
                        style={style}
                        render={render} />
  } else if (type === 'text') {
    return <TextField id={id} 
                      title={title} 
                      value={value} 
                      disabled={disabled}
                      render={render}
                      style={style} 
                      onChange={onChange} />
  } else if (type === 'checkbox') {
    return <CheckboxField id={id} 
                          title={title} 
                          value={value} 
                          disabled={disabled}
                          style={style} 
                          render={render}
                          onChange={onChange} />
  } else if (type === 'number') {
    return <NumberField id={id} 
                        title={title} 
                        value={value} 
                        disabled={disabled} 
                        style={style}
                        render={render}
                        onChange={onChange} />
  } else if (type === 'select') {
    return <SelectField id={id} 
                        title={title} 
                        value={value} 
                        disabled={disabled} 
                        options={options}
                        render={render}
                        style={style} 
                        onChange={onChange} />
  }
}
