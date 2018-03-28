export default ({modelKey, index}) => (
  (state, actions) => {
    let change = {
      model: state.model
    }

    change.model[modelKey] = state.model[modelKey]

    if (state.model[modelKey].length > 1) {
      change.model[modelKey] = [].concat(state.model[modelKey].slice(0, index), state.model[modelKey].slice(index + 1))
    } else {
      change.model[modelKey][index] = {}
    }

    return change
  }
)
