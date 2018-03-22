export default (key) => (
  (state, actions) => {
    state.model[key] = [].concat(state.model[key], {})

    return state
  }
)
