export default ({key, index}) => (
  (state, actions) => {
    let newState = JSON.parse(JSON.stringify(state))

    if (newState.model[key].length > 1) {
      newState.model[key].splice(index, 1)
    }

    return newState
  }
)
