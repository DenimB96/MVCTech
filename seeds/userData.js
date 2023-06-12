const { User } = require("../models");

const userData = [
  {
    username: "nonameuser24",
    email: "nonameuser@yahoo.com",
    password: "guest12345",
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;