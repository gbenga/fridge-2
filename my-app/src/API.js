function getItems() {
    return fetch("http://localhost:3001/items")
    .then(resp => resp.json())
    .catch(err => console.error(err));
}

export default { getItems }