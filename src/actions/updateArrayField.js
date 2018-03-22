export default ({key, id, index}) => (
  (state, actions) => {
    var change = {
      model: state.model
    };

    change.model[key] = [].concat(state.model[key])

    change.model[key][index][id] = event.target.type === 'checkbox' ? event.target.checked : event.target.value

    return change
  }
)
