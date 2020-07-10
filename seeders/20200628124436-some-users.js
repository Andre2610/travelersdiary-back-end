"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          firstName: "John",
          lastName: "Doe",
          email: "a@a.com",
          password: bcrypt.hashSync("a", SALT_ROUNDS),
          title: "My awesome homepage's title",
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
          about: `Posuere morbi leo urna molestie at elementum. Gravida cum sociis natoque penatibus et. 
          Non tellus orci ac auctor augue. Pharetra diam sit amet nisl suscipit adipiscing bibendum. 
          Ante metus dictum at tempor commodo ullamcorper a lacus vestibulum.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Foo",
          lastName: "Bar",
          email: "fubar@fubar.com",
          password: bcrypt.hashSync("123", SALT_ROUNDS),
          title: "Road to nowhere",
          about:
            "Diam donec adipiscing tristique risus nec feugiat in. Cras ornare arcu dui vivamus arcu.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Albert",
          lastName: "Epstein",
          email: "albert@epstein.com",
          password: bcrypt.hashSync("123", SALT_ROUNDS),
          title: "A lacus vestibulum sed arcu non.",
          about: "Nunc consequat interdum varius sit amet mattis vulputate.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Sam",
          lastName: "Jackson",
          email: "sam@jackson.com",
          password: bcrypt.hashSync("123", SALT_ROUNDS),
          title: "Say What again *******",
          about: "Mayo on fries?",
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
