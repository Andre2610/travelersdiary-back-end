"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "comments",
      [
        {
          comment: "Pariatur ea est anim consequat Lorem ex est.",
          userId: 1,
          postId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          comment: `Voluptate dolor enim dolore magna laborum ut. 
            Adipisicing aliqua qui id voluptate cupidatat est proident. Ut tempor eiusmod sit cillum ea.`,
          userId: 1,
          postId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          comment: `Ut amet consequat consectetur commodo laboris pariatur labore mollit veniam anim. 
            Mollit eiusmod ad et enim laborum aute pariatur veniam cillum nisi mollit quis veniam ad.`,
          userId: 1,
          postId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          comment: `Eu duis enim veniam non duis labore labore amet esse voluptate incididunt anim in eu. 
            Dolore voluptate fugiat dolor ea non duis eiusmod aliqua tempor sunt aliquip laborum commodo.`,
          userId: 2,
          postId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          comment:
            "Officia anim velit ex qui sit fugiat fugiat qui incididunt eiusmod.",
          userId: 2,
          postId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          comment: `Qui qui culpa occaecat ex dolor. Veniam qui nulla reprehenderit ipsum qui. 
            Duis voluptate nostrud consequat sunt irure et. Dolor qui adipisicing voluptate ut ullamco.`,
          userId: 1,
          postId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          comment:
            "Do sunt anim fugiat do qui veniam nulla non magna ea velit deserunt.",
          userId: 1,
          postId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          comment: "Veniam nostrud in sint consectetur aute.",
          userId: 3,
          postId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          comment:
            "Sit cupidatat non Lorem in deserunt dolore sunt nostrud irure magna eiusmod.",
          userId: 3,
          postId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          comment: "In duis cupidatat eiusmod sit qui.",
          userId: 2,
          postId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          comment: "Id ipsum aliquip excepteur anim velit.",
          userId: 2,
          postId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          comment:
            "Amet eu eu sit nisi ea eiusmod laboris id id eiusmod aute laboris ea officia.",
          userId: 4,
          postId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          comment:
            "Ea dolore do nisi magna ullamco dolor fugiat aliquip voluptate irure.",
          userId: 1,
          postId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          comment:
            "Excepteur cupidatat minim excepteur excepteur veniam labore ex est sunt.",
          userId: 4,
          postId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          comment:
            "Mollit id laboris consequat consectetur culpa ipsum exercitation tempor Lorem.",
          userId: 1,
          postId: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          comment: "Cillum minim adipisicing do nostrud amet magna enim.",
          userId: 2,
          postId: 14,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          comment:
            "Consectetur esse anim irure officia proident culpa magna. Cupidatat exercitation anim cillum reprehenderit laboris do occaecat eu ex aliquip enim duis..",
          userId: 3,
          postId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          comment:
            "Labore aute incididunt officia elit amet commodo tempor quis excepteur et ipsum.",
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
    return queryInterface.bulkDelete("comments", null, {});
  },
};
