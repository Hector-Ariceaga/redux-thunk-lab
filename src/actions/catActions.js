export function fetchCats() {
  return function(dispatch) {
    dispatch({type: 'LOADING_CATS'})
    return fetch('http://localhost:4000/db')
    .then(response => {
      return response.json()
    })
    .then(json => {
      return json.images
    })
    .then(payload => {
      dispatch({type: 'FETCH_CATS', payload})
    })
  }
}
