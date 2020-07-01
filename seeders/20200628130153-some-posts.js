"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "posts",
      [
        {
          title:
            "Commodo deserunt aute culpa deserunt sint elit cupidatat magna anim quis sit ipsum.",
          content: `Irure occaecat deserunt nostrud qui dolore cillum tempor cillum velit ullamco ea laboris qui. 
            Nulla veniam labore fugiat ullamco velit aliqua adipisicing culpa exercitation dolor. Laboris pariatur 
            et labore sunt deserunt commodo eiusmod anim consequat ad ad elit. Deserunt Lorem nostrud aute Lorem. 
            Excepteur ea anim commodo nostrud officia anim laboris tempor exercitation.`,
          latitude: 1.74,
          longitude: 2.65,
          tripId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Adipisicing Lorem deserunt culpa dolor.",
          content: `Esse deserunt amet est anim pariatur cupidatat. Voluptate consequat magna occaecat nostrud eiusmod 
            velit anim incididunt quis ut laboris in. Laborum laboris minim labore eiusmod voluptate deserunt 
            incididunt qui dolor nisi velit do nostrud culpa. Lorem do labore labore id esse consectetur mollit ut 
            elit commodo culpa sit. Elit in ad ea incididunt anim ex quis est voluptate consequat Lorem et.Incididunt 
            adipisicing dolore amet nisi. Ex est culpa commodo ut est occaecat. Irure voluptate mollit duis ea esse 
            esse est aliquip dolor velit. Sint commodo officia esse cupidatat eu consectetur sit sunt aute minim 
            veniam non. Exercitation consectetur dolor non dolore magna dolore quis. Et reprehenderit qui velit 
            cupidatat adipisicing cupidatat.`,
          latitude: 1.74,
          longitude: 2.65,
          tripId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Nostrud in mollit pariatur aute.",
          content:
            "Consectetur nisi consequat nostrud eiusmod officia officia voluptate sit quis. Labore voluptate in eu sunt dolor irure labore quis qui sit do exercitation culpa. Enim aliquip ad eiusmod qui ipsum.",
          latitude: 1.74,
          longitude: 2.65,
          tripId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title:
            "Nulla labore labore ea deserunt occaecat ex elit proident Lorem.",
          content: "Ea ut aliquip in est officia sunt proident aliqua.",
          latitude: 1.74,
          longitude: 2.65,
          tripId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Est reprehenderit duis incididunt minim est aute.",
          content:
            "Proident officia laboris ea in occaecat exercitation sint aliquip in velit in. Non eu exercitation nulla anim ex cupidatat excepteur. Proident tempor nisi sit Lorem cillum id mollit quis irure fugiat proident dolor qui.",
          latitude: 1.74,
          longitude: 2.65,
          tripId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title:
            "Ullamco velit ipsum veniam irure minim ut nostrud irure mollit ut.",
          content: `Ex sint officia aliquip pariatur incididunt laboris dolor voluptate commodo sit et in. Elit eiusmod fugiat est et occaecat veniam nulla aliqua do veniam cillum. Laboris officia irure eiusmod ex. Excepteur id proident consectetur irure fugiat qui sit reprehenderit in commodo nulla elit. Voluptate eu voluptate sint nulla et.

        Culpa anim enim aute culpa pariatur officia amet duis aute quis velit do nostrud. Ea esse id fugiat exercitation nisi excepteur ex qui sunt incididunt do esse enim. Veniam esse do elit aute duis sit voluptate nisi. Quis ut est cillum qui labore.

        Labore pariatur quis exercitation minim id id commodo deserunt nisi sunt. Non excepteur sit id fugiat nulla et duis consequat. Et Lorem fugiat ullamco do qui Lorem.`,
          latitude: 1.74,
          longitude: 2.65,
          tripId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title:
            "Nostrud laborum eiusmod reprehenderit enim dolor consectetur ea aliquip.",
          content:
            "Ipsum pariatur duis anim officia esse Lorem ullamco cupidatat sint do.",
          latitude: 1.74,
          longitude: 2.65,
          tripId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title:
            "Sint eiusmod id duis velit duis reprehenderit voluptate voluptate ut aliqua pariatur et.",
          content:
            "Excepteur dolore exercitation laborum ea. Deserunt voluptate laboris pariatur ipsum aliquip quis labore qui non incididunt proident. Ullamco culpa ex ipsum duis excepteur culpa aute eiusmod non eiusmod proident id consectetur. Do cillum occaecat ex pariatur minim anim ad quis laboris.",
          latitude: 1.74,
          longitude: 2.65,
          tripId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title:
            "Commodo deserunt aute culpa deserunt sint elit cupidatat magna anim quis sit ipsum.",
          content: `Irure occaecat deserunt nostrud qui dolore cillum tempor cillum velit ullamco ea laboris qui.
                    Nulla veniam labore fugiat ullamco velit aliqua adipisicing culpa exercitation dolor. Laboris pariatur
                    et labore sunt deserunt commodo eiusmod anim consequat ad ad elit. Deserunt Lorem nostrud aute Lorem.
                    Excepteur ea anim commodo nostrud officia anim laboris tempor exercitation.`,
          latitude: 1.74,
          longitude: 2.65,
          tripId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Adipisicing Lorem deserunt culpa dolor.",
          content: `Esse deserunt amet est anim pariatur cupidatat. Voluptate consequat magna occaecat nostrud eiusmod
                    velit anim incididunt quis ut laboris in. Laborum laboris minim labore eiusmod voluptate deserunt
                    incididunt qui dolor nisi velit do nostrud culpa. Lorem do labore labore id esse consectetur mollit ut
                    elit commodo culpa sit. Elit in ad ea incididunt anim ex quis est voluptate consequat Lorem et.Incididunt
                    adipisicing dolore amet nisi. Ex est culpa commodo ut est occaecat. Irure voluptate mollit duis ea esse
                    esse est aliquip dolor velit. Sint commodo officia esse cupidatat eu consectetur sit sunt aute minim
                    veniam non. Exercitation consectetur dolor non dolore magna dolore quis. Et reprehenderit qui velit
                    cupidatat adipisicing cupidatat.`,
          latitude: 1.74,
          longitude: 2.65,
          tripId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Nostrud in mollit pariatur aute.",
          content:
            "Consectetur nisi consequat nostrud eiusmod officia officia voluptate sit quis. Labore voluptate in eu sunt dolor irure labore quis qui sit do exercitation culpa. Enim aliquip ad eiusmod qui ipsum.",
          latitude: 1.74,
          longitude: 2.65,
          tripId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title:
            "Nulla labore labore ea deserunt occaecat ex elit proident Lorem.",
          content: "Ea ut aliquip in est officia sunt proident aliqua.",
          latitude: 1.74,
          longitude: 2.65,
          tripId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Est reprehenderit duis incididunt minim est aute.",
          content:
            "Proident officia laboris ea in occaecat exercitation sint aliquip in velit in. Non eu exercitation nulla anim ex cupidatat excepteur. Proident tempor nisi sit Lorem cillum id mollit quis irure fugiat proident dolor qui.",
          latitude: 1.74,
          longitude: 2.65,
          tripId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title:
            "Ullamco velit ipsum veniam irure minim ut nostrud irure mollit ut.",
          content: `Ex sint officia aliquip pariatur incididunt laboris dolor voluptate commodo sit et in. Elit eiusmod fugiat est et occaecat veniam nulla aliqua do veniam cillum. Laboris officia irure eiusmod ex. Excepteur id proident consectetur irure fugiat qui sit reprehenderit in commodo nulla elit. Voluptate eu voluptate sint nulla et.

        Culpa anim enim aute culpa pariatur officia amet duis aute quis velit do nostrud. Ea esse id fugiat exercitation nisi excepteur ex qui sunt incididunt do esse enim. Veniam esse do elit aute duis sit voluptate nisi. Quis ut est cillum qui labore.

        Labore pariatur quis exercitation minim id id commodo deserunt nisi sunt. Non excepteur sit id fugiat nulla et duis consequat. Et Lorem fugiat ullamco do qui Lorem.`,
          latitude: 1.74,
          longitude: 2.65,
          tripId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title:
            "Nostrud laborum eiusmod reprehenderit enim dolor consectetur ea aliquip.",
          content:
            "Ipsum pariatur duis anim officia esse Lorem ullamco cupidatat sint do.",
          latitude: 1.74,
          longitude: 2.65,
          tripId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title:
            "Sint eiusmod id duis velit duis reprehenderit voluptate voluptate ut aliqua pariatur et.",
          content:
            "Excepteur dolore exercitation laborum ea. Deserunt voluptate laboris pariatur ipsum aliquip quis labore qui non incididunt proident. Ullamco culpa ex ipsum duis excepteur culpa aute eiusmod non eiusmod proident id consectetur. Do cillum occaecat ex pariatur minim anim ad quis laboris.",
          latitude: 1.74,
          longitude: 2.65,
          tripId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("posts", null, {});
  },
};
