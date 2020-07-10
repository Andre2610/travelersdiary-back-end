"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "trips",
      [
        {
          tripTitle: "Visiting Lisbon",
          startDate: "12/03/2017",
          endDate: "13/07/2018",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tripTitle: "Going through the Thai islands",
          startDate: "12/03/2017",
          endDate: "13/07/2018",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tripTitle: "Freezing in Iceland",
          startDate: "12/03/2017",
          endDate: "13/07/2018",
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tripTitle: "US east coast, kinda of",
          startDate: "12/03/2017",
          endDate: "13/07/2018",
          userId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tripTitle: "God save the queen",
          startDate: "12/03/2017",
          endDate: "13/07/2018",
          userId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tripTitle: "I like to move it move it",
          startDate: "12/03/2017",
          endDate: "13/07/2018",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tripTitle: "Sambaaa de Janeiro",
          startDate: "12/03/2017",
          endDate: "13/07/2018",
          userId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tripTitle: "Exploring the nether region",
          startDate: "12/03/2017",
          userId: 1,
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
