function getItems() {
    return fetch("http://localhost:3001/items")
    .then(resp => resp.json())
    .catch(err => console.error(err));
}

function test() {
    console.log("2");
}

function console(){
    console.log("Hello World")
}

export default { getItems, console }
