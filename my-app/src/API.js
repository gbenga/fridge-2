function getItems() {
    return fetch("http://localhost:3001/items")
    .then(resp => resp.json())
    .catch(err => console.error(err));
}

function test() {
    console.log("2");
}

function getUsers() {
    return fetch("http://localhost:3001/users")
    .then(resp => resp.json())
    .catch(err => console.error(err));
}

export default { getItems, getUsers }
