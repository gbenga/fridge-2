const faker = require("faker");

// let futureDate = faker.date.future();
// let recentDate = faker.date.recent();
// let weekday = faker.date.weekday();

const data = {
  items: [
    {
      id: 1,
      name: "Yoghurt",
      category: "Dairy",
      price: `£${Math.floor(Math.random() * 50)}`,
      quantity: `${Math.floor(Math.random() * 10)}`,
      purchased: `${faker.date.past()}`,
      expires: `${faker.date.future()}`,
      user_id: 2,
    },
    {
      id: 2,
      name: "Milk",
      category: "Dairy",
      price: `£${Math.floor(Math.random() * 50)}`,
      quantity: `${Math.floor(Math.random() * 10)}`,
      purchased: `${faker.date.past()}`,
      expires: `${faker.date.future()}`,
      user_id: 1,
    },
    {
      id: 3,
      name: "Grapes",
      category: "Fruit",
      price: `£${Math.floor(Math.random() * 50)}`,
      quantity: `${Math.floor(Math.random() * 10)}`,
      purchased: `${faker.date.past()}`,
      expires: faker.date.future(),
      user_id: 1,
    },
    {
      id: 4,
      name: "Mango",
      category: "Fruit",
      price: `£${Math.floor(Math.random() * 50)}`,
      quantity: `${Math.floor(Math.random() * 10)}`,
      purchased: `${faker.date.past()}`,
      expires: faker.date.future(),
      user_id: 1,
    },
    {
      id: 5,
      name: "Butter",
      category: "Dairy",
      price: `£${Math.floor(Math.random() * 50)}`,
      quantity: `${Math.floor(Math.random() * 10)}`,
      purchased: `${faker.date.past()}`,
      expires: faker.date.future(),
      user_id: 1,
    },
    {
      id: 6,
      name: "Apple Juice",
      purchased: `${faker.date.past()}`,
      price: `£${Math.floor(Math.random() * 50)}`,
      quantity: `${Math.floor(Math.random() * 10)}`,
      category: "Juice",
      expires: `${faker.date.future()}`,
      user_id: 2,
    },
    {
      id: 7,
      name: "Broccoli",
      category: "Vegetable",
      price: `£${Math.floor(Math.random() * 50)}`,
      quantity: `${Math.floor(Math.random() * 10)}`,
      purchased: `${faker.date.past()}`,
      expires: `${faker.date.future()}`,
      user_id: 2,
    },
  ],
  users: [
    {
      id: 1,
      name: "Gbenga",
      image: "",
    },
    {
      id: 2,
      name: "Adao",
      image: "",
    },
  ],
};

export default data;
