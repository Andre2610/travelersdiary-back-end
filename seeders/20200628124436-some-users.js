"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          firstName: "Paula",
          lastName: "Morales",
          email: "paula@p.com",
          password: "123",
          title: "User 1 title",
          about: "user with id 1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Cosme",
          lastName: "Fulanito",
          email: "Email@muchoemail.com",
          password: "123",
          title: "One important title",
          about: "user with Id 2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Foo",
          lastName: "Bar",
          email: "fubar@fubar.com",
          password: "123",
          title: "road  to nowhere",
          about: "Everything about me is FUBAR, id 3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // {
        //   firstName: "test",
        //   lastName: "user",
        //   email: "test@test.com",
        //   password: "123",
        //   title: "title of test user",
        //   about: "Everything about userId 4",
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        // {
        //   firstName: "test2",
        //   lastName: "user2",
        //   email: "test2@test.com",
        //   password: "123",
        //   title: "title of test user",
        //   about: "Everything about userId 5",
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
