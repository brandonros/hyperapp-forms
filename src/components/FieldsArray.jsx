// @jsx h 

import { h } from 'hyperapp'

import Field from './Field.jsx'

export default ({model, fields, onChange, remove, key}) => (state, actions) => (
  <div class="form-inline">
    {
      model.map((row, index) => (
        <div>
          {
            fields.map(({id, type, title, value, disabled, style, options, numeric, positions, render}) => {
              if (type === 'divider') {
                return <br />;
              }

              return (
                <Field id={id} 
                       type={type} 
                       title={title} 
                       value={row[id]} 
                       render={render ? render({id, key, index}) : undefined}
                       options={options} 
                       disabled={disabled}
                       style={style} 
                       numeric={numeric}
                       positions={positions}
                       onChange={() => onChange({id, index, type, key})} />
              )
            })
          }

          <div class="text-right">
            <button type="button" 
                    class="btn btn-link" 
                    onclick={() => remove({key, index})}>Remove</button>
          </div>
        </div>
      ))
    }
  </div>
)
