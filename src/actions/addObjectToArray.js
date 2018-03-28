export default (modelKey) => (
  (state, actions) => {
    let change = {
      model: state.model
    }

    change.model[modelKey] = [].concat(state.model[modelKey], {})

    return change
  }
)
