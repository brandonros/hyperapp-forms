export default ({key, index}) => (
  (state, actions) => {
    if (state.model[key].length > 1) {
      state.model[key] = [].concat(state.model[key].slice(0, index), state.model[key].slice(index + 1))
    }

    return state
  }
)
