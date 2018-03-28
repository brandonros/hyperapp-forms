export default ({key, index}) => (
  (state, actions) => {
    let change = {
      model: state.model
    }

    change.model[key] = state.model[key]

    if (state.model[key].length > 1) {
      change.model[key] = [].concat(state.model[key].slice(0, index), state.model[key].slice(index + 1))
    } else {
      change.model[key][index] = {}
    }

    return change
  }
)
