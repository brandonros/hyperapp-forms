export default ({key, id, index}) => (
  (state, actions) => {
    var change = {
      model: {}
    };

    change.model[key] = [];

    state.model[key].forEach(function(element) {
      change.model[key].push(element)
    });

    change.model[key][index][id] = event.target.type === 'checkbox' ? event.target.checked : event.target.value

    return change
  }
)
