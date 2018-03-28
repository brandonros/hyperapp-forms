export default ({modelKey, id, type, index}) => (
  (state, actions) => {
    let change = {
      model: state.model
    }

    change.model[modelKey] = state.model[modelKey]

    let value = event.target.type === 'checkbox' ? event.target.checked : event.target.value

    if (type === 'number') {
      value = parseFloat(value)
    }

    change.model[modelKey][index][id] = value

    return change
  }
)
