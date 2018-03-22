export default ({key, id}) => (
  (state, actions) => {
    let change = {
      model: state.model
    }

    change.model[key][id] = event.target.type === 'checkbox' ? event.target.checked : event.target.value
    
    return change
  }
)
