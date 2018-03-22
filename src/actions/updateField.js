export default ({key, id}) => (
  (state, actions) => {
    state.model[key][id] = event.target.type === 'checkbox' ? event.target.checked : event.target.value
    
    return state
  }
)
