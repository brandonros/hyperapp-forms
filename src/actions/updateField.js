export default ({key, type, id}) => (
  (state, actions) => {
    let change = {
      model: state.model
    }

    let value = event.target.type === 'checkbox' ? event.target.checked : event.target.value

    if (value === 'number') {
      value = parseFloat(value)
    }

    change.model[key][id] = value
    
    return change
  }
)
