export default (key) => (
  (state, actions) => {
    let newState = JSON.parse(JSON.stringify(state))

    newState.model[key].push({})

    return newState
  }
)
