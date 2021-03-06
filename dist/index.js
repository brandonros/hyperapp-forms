(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global['hyperapp-forms'] = factory());
}(this, (function () { 'use strict';

  function addObjectToArray (modelKey) { return (
    function (state, actions) {
      var change = {
        model: state.model
      };

      change.model[modelKey] = [].concat(state.model[modelKey], {});

      return change
    }
  ); }

  function removeObjectFromArray (ref) {
    var modelKey = ref.modelKey;
    var index = ref.index;

    return (
    function (state, actions) {
      var change = {
        model: state.model
      };

      change.model[modelKey] = state.model[modelKey];

      if (state.model[modelKey].length > 1) {
        change.model[modelKey] = [].concat(state.model[modelKey].slice(0, index), state.model[modelKey].slice(index + 1));
      } else {
        change.model[modelKey][index] = {};
      }

      return change
    }
  );
  }

  function updateArrayField (ref) {
    var modelKey = ref.modelKey;
    var id = ref.id;
    var type = ref.type;
    var index = ref.index;

    return (
    function (state, actions) {
      var change = {
        model: state.model
      };

      change.model[modelKey] = state.model[modelKey];

      var value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

      if (type === 'number') {
        value = parseFloat(value);
      }

      change.model[modelKey][index][id] = value;

      return change
    }
  );
  }

  function updateField (ref) {
    var modelKey = ref.modelKey;
    var type = ref.type;
    var id = ref.id;

    return (
    function (state, actions) {
      var change = {
        model: state.model
      };

      var value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

      if (type === 'number') {
        value = parseFloat(value);
      }

      change.model[modelKey][id] = value;
      
      return change
    }
  );
  }

  function h(name, attributes) {
    var arguments$1 = arguments;

    var rest = [];
    var children = [];
    var length = arguments.length;

    while (length-- > 2) { rest.push(arguments$1[length]); }

    while (rest.length) {
      var node = rest.pop();
      if (node && node.pop) {
        for (length = node.length; length--; ) {
          rest.push(node[length]);
        }
      } else if (node != null && node !== true && node !== false) {
        children.push(node);
      }
    }

    return typeof name === "function"
      ? name(attributes || {}, children)
      : {
          nodeName: name,
          attributes: attributes || {},
          children: children,
          key: attributes && attributes.key
        }
  }

  // @jsx h 

  function CheckboxField (ref) {
    var id = ref.id;
    var title = ref.title;
    var value = ref.value;
    var disabled = ref.disabled;
    var style = ref.style;
    var onChange = ref.onChange;

    return function (state, actions) {
    if (typeof render === 'function') {
      value = render(state);
    }

    return (
      h( 'div', { class: "form-group", key: id },
        h( 'label', null, title ),
        h( 'input', { class: "form-control", type: "checkbox", id: id, style: style, checked: value ? 'checked' : '', disabled: disabled ? 'disabled' : '', onchange: onChange })
      )
    )
  };
  }

  // @jsx h 

  function NumberField (ref) {
    var id = ref.id;
    var title = ref.title;
    var value = ref.value;
    var disabled = ref.disabled;
    var render = ref.render;
    var style = ref.style;
    var onChange = ref.onChange;

    return function (state, actions) {
    if (typeof render === 'function') {
      value = render(state);
    }

    return (
      h( 'div', { class: "form-group", key: id },
        h( 'label', null, title ),
        h( 'input', { class: "form-control", type: "number", id: id, value: value, style: style, disabled: disabled ? 'disabled' : '', oninput: onChange })
      )
    )
  };
  }

  // @jsx h 

  function SelectField (ref) {
    var id = ref.id;
    var title = ref.title;
    var value = ref.value;
    var options = ref.options;
    var render = ref.render;
    var disabled = ref.disabled;
    var style = ref.style;
    var onChange = ref.onChange;

    return function (state, actions) {
    if (typeof render === 'function') {
      options = render(state);
    }

    return (
      h( 'div', { class: "form-group", key: id },
        h( 'label', null, title ),
        h( 'select', { class: "form-control", id: id, style: style, disabled: disabled ? 'disabled' : '', onchange: onChange },
          [].concat('', options).map(function (option) { return (
              h( 'option', { value: typeof option === 'object' ? option.name : option, selected: (typeof option === 'object' ? option.name : option) === value ? 'selected' : '', key: typeof option === 'object' ? option.name : option },
                typeof option === 'object' ? option.name : option
              )
            ); })
        )
      )
    )
  };
  }

  // @jsx h 

  function StaticField (ref) {
    var id = ref.id;
    var title = ref.title;
    var value = ref.value;
    var render = ref.render;
    var numeric = ref.numeric;
    var positions = ref.positions;
    var style = ref.style;

    return function (state, actions) {
    if (typeof render === 'function') {
      value = render(state);

      if (numeric) {
        value = value.toFixed(positions);
      }
    }
    
    return (
      h( 'div', { class: "form-group", key: id },
        h( 'label', null, title ),
        h( 'span', { class: "static-field", style: style, id: id }, value)
      )
    )
  };
  }

  // @jsx h 

  function TextField (ref) {
    var id = ref.id;
    var title = ref.title;
    var value = ref.value;
    var disabled = ref.disabled;
    var style = ref.style;
    var render = ref.render;
    var onChange = ref.onChange;

    return function (state, actions) {
    if (typeof render === 'function') {
      value = render(state);
    }

    return (
      h( 'div', { class: "form-group", key: id },
        h( 'label', null, title ),
        h( 'input', { class: "form-control", type: "text", id: id, value: value, oninput: onChange, style: style, disabled: disabled ? 'disabled' : '' })
      )
    )
  };
  }

  // @jsx h 

  function Field (ref) {
    var id = ref.id;
    var type = ref.type;
    var title = ref.title;
    var value = ref.value;
    var options = ref.options;
    var disabled = ref.disabled;
    var style = ref.style;
    var render = ref.render;
    var numeric = ref.numeric;
    var positions = ref.positions;
    var onChange = ref.onChange;

    return function (state, actions) {
    if (type === 'static') {
      return h( StaticField, { id: id, title: title, value: value, style: style, numeric: numeric, positions: positions, render: render })
    } else if (type === 'text') {
      return h( TextField, { id: id, title: title, value: value, disabled: disabled, render: render, style: style, onChange: onChange })
    } else if (type === 'checkbox') {
      return h( CheckboxField, { id: id, title: title, value: value, disabled: disabled, style: style, render: render, onChange: onChange })
    } else if (type === 'number') {
      return h( NumberField, { id: id, title: title, value: value, disabled: disabled, style: style, render: render, onChange: onChange })
    } else if (type === 'select') {
      return h( SelectField, { id: id, title: title, value: value, disabled: disabled, options: options, render: render, style: style, onChange: onChange })
    }
  };
  }

  // @jsx h 

  function Fields (ref) {
    var model = ref.model;
    var fields = ref.fields;
    var onChange = ref.onChange;
    var modelKey = ref.modelKey;

    return function (state, actions) { return (
    h( 'div', { class: "form-inline" },
      fields.map(function (ref, index) {
          var id = ref.id;
          var type = ref.type;
          var title = ref.title;
          var value = ref.value;
          var options = ref.options;
          var disabled = ref.disabled;
          var style = ref.style;
          var numeric = ref.numeric;
          var positions = ref.positions;
          var render = ref.render;

          if (type === 'divider') {
            return h( 'br', null );
          }

          return (h( Field, { id: id, type: type, title: title, value: model[id], options: options, render: render ? render({id: id, modelKey: modelKey}) : undefined, disabled: disabled, style: style, numeric: numeric, positions: positions, onChange: type === 'static' ? undefined : function () { return onChange({id: id, type: type, modelKey: modelKey}); } }))
        })
    )
  ); };
  }

  // @jsx h 

  function FieldsArray (ref) {
    var model = ref.model;
    var fields = ref.fields;
    var onChange = ref.onChange;
    var remove = ref.remove;
    var modelKey = ref.modelKey;

    return function (state, actions) { return (
    h( 'div', { class: "form-inline" },
      model.map(function (row, index) { return (
          h( 'div', null,
            fields.map(function (ref) {
                var id = ref.id;
                var type = ref.type;
                var title = ref.title;
                var value = ref.value;
                var disabled = ref.disabled;
                var style = ref.style;
                var options = ref.options;
                var numeric = ref.numeric;
                var positions = ref.positions;
                var render = ref.render;

                if (type === 'divider') {
                  return h( 'br', null );
                }

                return (
                  h( Field, { id: id, type: type, title: title, value: row[id], render: render ? render({id: id, modelKey: modelKey, index: index}) : undefined, options: options, disabled: disabled, style: style, numeric: numeric, positions: positions, onChange: function () { return onChange({id: id, index: index, type: type, modelKey: modelKey}); } })
                )
              }),

            h( 'div', { class: "text-right" },
              h( 'button', { type: "button", class: "btn btn-link", onclick: function () { return remove({modelKey: modelKey, index: index}); } }, "Remove")
            )
          )
        ); })
    )
  ); };
  }

  var index = {
    /* actions */
    addObjectToArray: addObjectToArray,
    removeObjectFromArray: removeObjectFromArray,
    updateArrayField: updateArrayField,
    updateField: updateField,

    /* compoents */
    CheckboxField: CheckboxField,
    NumberField: NumberField,
    SelectField: SelectField,
    StaticField: StaticField,
    TextField: TextField,
    Field: Field,
    Fields: Fields,
    FieldsArray: FieldsArray
  }

  return index;

})));
//# sourceMappingURL=index.js.map
