export default (key) => (
  (state, actions) => {
    let change = {
      model: state.model
    }

    change.model[key] = [].concat(state.model[key], {})

    return change
  }
)
