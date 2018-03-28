export default ({modelKey, type, id}) => (
  (state, actions) => {
    let change = {
      model: state.model
    }

    let value = event.target.type === 'checkbox' ? event.target.checked : event.target.value

    if (type === 'number') {
      value = parseFloat(value)
    }

    change.model[modelKey][id] = value
    
    return change
  }
)
