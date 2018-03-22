export default ({key, id, index}) => (
  (state, actions) => {
    let newState = JSON.parse(JSON.stringify(state))

    newState.model[key][index][id] = event.target.type === 'checkbox' ? event.target.checked : event.target.value

    return newState
  }
)
