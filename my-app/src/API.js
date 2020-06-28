function getItems() {
    return fetch("http://localhost:3001/items")
    .then(resp => resp.json())
    .catch(err => console.error(err));
}

function getUsers() {
    return fetch("http://localhost:3001/users")
    .then(resp => resp.json())
    .catch(err => console.error(err));
}

function postNewItem(item) {
    let object = {
        name: item.name,
        category: item.category,
        price: item.price,
        quantity: item.quantity,
        purchased: item.purchased,
        expires: item.expires,
    };

    let configObject = {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
    },
    body: JSON.stringify(object)
    };
    
    return fetch("http://localhost:3001/items", configObject)
    .then(resp => resp.json())
}

function destroyItem(id) {
    let configObject = {
    method: 'DELETE',
    headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
    },
    };
    return fetch(`http://localhost:3001/items/${id}`, configObject)
    .then(resp => resp.json())
    .catch(error => console.log(error));
}

export default { getItems, getUsers, postNewItem, destroyItem }
