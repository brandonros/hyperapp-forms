export default ({key, id, index}) => (
  (state, actions) => {
    state.model[key][index][id] = event.target.type === 'checkbox' ? event.target.checked : event.target.value

    return state
  }
)
