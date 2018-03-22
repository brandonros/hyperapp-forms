// @jsx h 

import { h } from 'hyperapp'

import Field from './Field.jsx'

export default ({model, fields, onChange, key}) => (state, actions) => (
  <div class="form-inline">
    {
      fields.map(({id, type, title, value, options, disabled, style, render}, index) => {
        if (type === 'divider') {
          return <br />;
        }

        let wrappedRender = render ? render({id, key}) : undefined;

        console.log(wrappedRender)

        return (<Field id={id} 
                       type={type} 
                       title={title} 
                       value={model[id]} 
                       options={options} 
                       render={wrappedRender}
                       disabled={disabled} 
                       style={style}
                       onChange={type === 'static' ? undefined : () => onChange({id, key})} />)
      })
    }
  </div>
)
