export default ({key, id}) => (
  (state, actions) => {
    let newState = JSON.parse(JSON.stringify(state))

    newState.model[key][id] = event.target.type === 'checkbox' ? event.target.checked : event.target.value
    
    return newState
  }
)
