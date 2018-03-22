export default (key) => (
  (state, actions) => {
    let change = {
      model: {}
    }

    change.model[key] = [].concat(state.model[key], {})

    return change
  }
)
