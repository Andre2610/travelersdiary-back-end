"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "likes",
      [
        {
          like: true,
          userId: 1,
          postId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          like: true,
          userId: 1,
          postId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          like: true,
          userId: 1,
          postId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          like: true,
          userId: 2,
          postId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          like: true,
          userId: 2,
          postId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          like: true,
          userId: 2,
          postId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          like: true,
          userId: 5,
          postId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          like: true,
          userId: 3,
          postId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          like: true,
          userId: 3,
          postId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          like: true,
          userId: 2,
          postId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          like: true,
          userId: 3,
          postId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          like: true,
          userId: 5,
          postId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          like: true,
          userId: 4,
          postId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          like: true,
          userId: 4,
          postId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          like: true,
          userId: 1,
          postId: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          like: true,
          userId: 2,
          postId: 14,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          like: true,
          userId: 3,
          postId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          like: true,
          userId: 2,
          postId: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("likes", null, {});
  },
};
