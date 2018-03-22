export default ({key, id, type, index}) => (
  (state, actions) => {
    let change = {
      model: state.model
    }

    change.model[key] = [].concat(state.model[key])

    let value = event.target.type === 'checkbox' ? event.target.checked : event.target.value

    if (type === 'number') {
      value = parseFloat(value)
    }

    change.model[key][index][id] = value

    return change
  }
)
