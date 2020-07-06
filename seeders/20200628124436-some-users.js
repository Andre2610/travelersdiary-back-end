"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          firstName: "userfirstname",
          lastName: "lastname",
          email: "a@a.com",
          password: bcrypt.hashSync("a", SALT_ROUNDS),
          title: "User 1 title",
          about: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
             It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Cosme",
          lastName: "Fulanito",
          email: "Email@muchoemail.com",
          password: bcrypt.hashSync("123", SALT_ROUNDS),
          title: "One important title",
          about: "user with Id 2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Foo",
          lastName: "Bar",
          email: "fubar@fubar.com",
          password: bcrypt.hashSync("123", SALT_ROUNDS),
          title: "road  to nowhere",
          about: "Everything about me is FUBAR, id 3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "test",
          lastName: "user",
          email: "test@test.com",
          password: bcrypt.hashSync("123", SALT_ROUNDS),
          title: "title of test user",
          about: "Everything about userId 4",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "test2",
          lastName: "user2",
          email: "test2@test.com",
          password: bcrypt.hashSync("123", SALT_ROUNDS),
          title: "title of test user",
          about: "Everything about userId 5",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
