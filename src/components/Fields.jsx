// @jsx h 

import { h } from 'hyperapp'

import Field from './Field.jsx'

export default ({model, fields, onChange, modelKey}) => (state, actions) => (
  <div class="form-inline">
    {
      fields.map(({id, type, title, value, options, disabled, style, numeric, positions, render}, index) => {
        if (type === 'divider') {
          return <br />;
        }

        return (<Field id={id} 
                       type={type} 
                       title={title} 
                       value={model[id]} 
                       options={options} 
                       render={render ? render({id, modelKey}) : undefined}
                       disabled={disabled} 
                       style={style}
                       numeric={numeric}
                       positions={positions}
                       onChange={type === 'static' ? undefined : () => onChange({id, type, modelKey})} />)
      })
    }
  </div>
)
