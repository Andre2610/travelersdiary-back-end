"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "trips",
      [
        {
          tripTitle: "Trip 1",
          startDate: "12/03/2017",
          endDate: "13/07/2018",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tripTitle: "Trip 2",
          startDate: "12/03/2017",
          endDate: "13/07/2018",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tripTitle: "Trip 3",
          startDate: "12/03/2017",
          endDate: "13/07/2018",
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tripTitle: "Trip 4",
          startDate: "12/03/2017",
          endDate: "13/07/2018",
          userId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tripTitle: "Trip 5",
          startDate: "12/03/2017",
          endDate: "13/07/2018",
          userId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tripTitle: "Trip 6",
          startDate: "12/03/2017",
          endDate: "13/07/2018",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tripTitle: "Trip 7",
          startDate: "12/03/2017",
          endDate: "13/07/2018",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tripTitle: "Trip 8n",
          startDate: "12/03/2017",
          userId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("trips", null, {});
  },
};
