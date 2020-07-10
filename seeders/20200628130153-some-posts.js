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
          latitude: 38.7223,
          longitude: -9.1393,
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
          latitude: 10.084981,
          longitude: 99.826064,
          tripId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Nostrud in mollit pariatur aute.",
          content:
            "Consectetur nisi consequat nostrud eiusmod officia officia voluptate sit quis. Labore voluptate in eu sunt dolor irure labore quis qui sit do exercitation culpa. Enim aliquip ad eiusmod qui ipsum.",
          latitude: 63.743631,
          longitude: -20.43905,
          tripId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title:
            "Nulla labore labore ea deserunt occaecat ex elit proident Lorem.",
          content: "Ea ut aliquip in est officia sunt proident aliqua.",
          latitude: 38.5254,
          longitude: -8.8941,
          tripId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Est reprehenderit duis incididunt minim est aute.",
          content: `Sapien eget mi proin sed libero enim. Sagittis orci a scelerisque purus semper eget duis at tellus. Sed sed risus pretium quam vulputate dignissim suspendisse in est. 
          Sodales ut etiam sit amet. Nibh mauris cursus mattis molestie a iaculis.`,
          latitude: 51.495065,
          longitude: -0.160095,
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
          latitude: 64.139369,
          longitude: -21.738296,
          tripId: 3,
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
          latitude: 38.6971,
          longitude: -9.4223,
          tripId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Esse deserunt amet est anim pariatur cupidatat.",
          content: `Esse deserunt amet est anim pariatur cupidatat. Voluptate consequat magna occaecat nostrud eiusmod
                    velit anim incididunt quis ut laboris in duis ea esse.
                    esse est aliquip dolor velit. Sint commodo officia esse cupidatat eu consectetur sit sunt aute minim
                    veniam non. Exercitation consectetur dolor non dolore magna dolore quis. Et reprehenderit qui velit
                    cupidatat adipisicing cupidatat.`,
          latitude: 10.105768,
          longitude: 99.824171,
          tripId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Nostrud in mollit pariatur aute.",
          content:
            "Consectetur nisi consequat nostrud eiusmod officia officia voluptate sit quis. Labore voluptate in eu sunt dolor irure labore quis qui sit do exercitation culpa. Enim aliquip ad eiusmod qui ipsum.",
          latitude: 64.033744,
          longitude: -22.621729,
          tripId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //postid: 10
          title:
            "Nulla labore labore ea deserunt occaecat ex elit proident Lorem.",
          content: `Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed. Turpis massa sed elementum tempus. 
          Dignissim suspendisse in est ante in nibh mauris cursus mattis. Mattis pellentesque id nibh tortor id aliquet lectus proin. Quisque egestas diam in arcu cursus euismod quis viverra nibh. 
          Viverra suspendisse potenti nullam ac tortor vitae purus faucibus.`,
          latitude: 40.73321,
          longitude: -73.992118,
          tripId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Est reprehenderit duis incididunt minim est aute.",
          content: `Purus sit amet volutpat consequat mauris nunc. Nec ultrices dui sapien eget mi proin sed libero. 
          Cursus eget nunc scelerisque viverra mauris in aliquam sem. At elementum eu facilisis sed odio morbi quis. 
          Porttitor eget dolor morbi non arcu risus quis.`,
          latitude: 51.467697,
          longitude: -0.027641,
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
          latitude: -15.771109,
          longitude: 46.478993,
          tripId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "FULL MOOOOOOOON.",
          content: `Nascetur ridiculus mus mauris vitae ultricies leo integer malesuada. 
          Tortor posuere ac ut consequat semper viverra. Nisl tincidunt eget nullam non nisi est sit. Etiam sit amet nisl purus in mollis. Massa vitae tortor condimentum lacinia quis vel eros. 
          Faucibus scelerisque eleifend donec pretium vulputate sapien. Lorem donec massa sapien faucibus et molestie ac feugiat. Lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed. 
          Turpis massa sed elementum tempus. Dignissim suspendisse in est ante in nibh mauris cursus mattis. Mattis pellentesque id nibh tortor id aliquet lectus proin. Quisque egestas diam in arcu cursus euismod quis viverra nibh. 
          Viverra suspendisse potenti nullam ac tortor vitae purus faucibus.`,
          latitude: 9.67623,
          longitude: 100.068059,
          tripId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title:
            "Et sollicitudin ac orci phasellus egestas tellus rutrum tellus.",
          content: `Excepteur dolore exercitation laborum ea. Deserunt voluptate laboris pariatur ipsum aliquip quis labore qui non incididunt proident. 
            Ullamco culpa ex ipsum duis excepteur culpa aute eiusmod non eiusmod proident id consectetur. Do cillum occaecat ex pariatur minim anim ad quis laboris.`,
          latitude: 9.741204,
          longitude: 99.99531,
          tripId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Nascetur ridiculus mus mauris vitae.",
          content: `Excepteur dolore exercitation laborum ea. Deserunt voluptate laboris pariatur ipsum aliquip quis labore qui non incididunt proident. Ullamco culpa ex ipsum duis excepteur culpa aute eiusmod non eiusmod proident id consectetur. 
            Do cillum occaecat ex pariatur minim anim ad quis laboris.`,
          latitude: 9.545229,
          longitude: 100.050412,
          tripId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "A lacus vestibulum sed arcu non.",
          content: `A lacus vestibulum sed arcu non. Ipsum dolor sit amet consectetur adipiscing elit. Elit pellentesque habitant morbi tristique. Lorem sed risus ultricies tristique. Sit amet massa vitae tortor condimentum lacinia quis vel. 
          Faucibus nisl tincidunt eget nullam non. Urna duis convallis convallis tellus id interdum velit laoreet. `,
          latitude: 64.595613,
          longitude: -22.254826,
          tripId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title:
            "Est ullamcorper eget nulla facilisi etiam dignissim. Eleifend quam adipiscing vitae proin sagittis nisl.",
          content: `Est ullamcorper eget nulla facilisi etiam dignissim. Eleifend quam adipiscing vitae proin sagittis nisl. Sed vulputate mi sit amet. Turpis cursus in hac habitasse platea dictumst quisque sagittis purus. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. 
          Curabitur gravida arcu ac tortor. `,
          latitude: -16.425548,
          longitude: 46.879163,
          tripId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Est ullamcorper eget vitae proin sagittis nisl.",
          content: `Porttitor lacus luctus accumsan tortor posuere. Et malesuada fames ac turpis egestas. Arcu non sodales neque sodales ut etiam sit amet nisl. Adipiscing elit pellentesque habitant morbi tristique senectus et netus. 
          Tempus iaculis urna id volutpat lacus laoreet. Id cursus metus aliquam eleifend mi in nulla.`,
          latitude: -17.85329,
          longitude: 49.077896,
          tripId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title:
            "Est ullamcorper eget nulla facilisi etiam dignissim. Eleifend quam adipiscing vitae proin sagittis nisl.",
          content: `Ipsum nunc aliquet bibendum enim facilisis gravida neque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. 
          Lacus sed viverra tellus in hac habitasse. Et leo duis ut diam quam nulla porttitor. 
          Congue quisque egestas diam in. Et odio pellentesque diam volutpat commodo. Eu ultrices vitae auctor eu augue. Ut placerat orci nulla pellentesque.`,
          latitude: 53.798218,
          longitude: -1.54945,
          tripId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // 20
          title: "Sed vulputate mi sit amet.",
          content: `Volutpat lacus laoreet non curabitur. Rhoncus est pellentesque elit ullamcorper. 
          Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Eget nullam non nisi est sit amet facilisis magna etiam. Laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt. Feugiat in ante metus dictum at tempor commodo. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Mattis pellentesque id nibh tortor id aliquet lectus proin. Faucibus ornare suspendisse sed nisi lacus sed viverra tellus. Ultrices dui sapien eget mi proin sed libero. Dui nunc mattis enim ut tellus elementum. Volutpat commodo sed egestas egestas fringilla phasellus faucibus. Enim tortor at auctor urna nunc id cursus. Aliquam etiam erat velit scelerisque in dictum non consectetur a. 
          Purus sit amet volutpat consequat mauris nunc. Nec ultrices dui sapien eget mi proin sed libero.`,
          latitude: 51.495065,
          longitude: -0.133561,
          tripId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Nisl tincidunt eget nullam non nisi est sit.",
          content: `Tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque. 
          Blandit massa enim nec dui. Leo vel orci porta non pulvinar neque laoreet. Odio facilisis mauris sit amet massa. Quis risus sed vulputate odio ut enim. 
          Non diam phasellus vestibulum lorem. Tortor aliquam nulla facilisi cras fermentum odio. `,
          latitude: 50.836733,
          longitude: -0.184947,
          tripId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Lorem sed risus ultricies tristique. ",
          content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Tellus in metus vulputate eu scelerisque. Donec enim diam vulputate ut pharetra sit amet aliquam. Amet commodo nulla facilisi nullam vehicula. Odio euismod lacinia at quis. Vulputate sapien nec sagittis aliquam. Nullam eget felis eget nunc lobortis mattis aliquam faucibus. Mauris augue neque gravida in fermentum et sollicitudin ac. 
          Neque ornare aenean euismod elementum nisi quis. Sit amet cursus sit amet dictum sit. Orci dapibus ultrices in iaculis nunc sed augue lacus. 
          Urna et pharetra pharetra massa massa ultricies mi. Felis imperdiet proin fermentum leo vel.`,
          latitude: 39.943436,
          longitude: -75.175488,
          tripId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Gravida cum sociis natoque penatibus et.",
          content: `Netus et malesuada fames ac turpis egestas. Elementum nisi quis eleifend quam adipiscing. 
          Dignissim convallis aenean et tortor at risus. In nisl nisi scelerisque eu ultrices vitae auctor eu. Sed viverra tellus in hac habitasse platea dictumst vestibulum. Facilisi morbi tempus iaculis urna id volutpat lacus laoreet non. Augue mauris augue neque gravida in fermentum. Pharetra convallis posuere morbi leo urna molestie at elementum. Enim facilisis gravida neque convallis a cras semper. 
          Dictum sit amet justo donec enim diam vulputate ut pharetra. `,
          latitude: 38.873929,
          longitude: -76.988378,
          tripId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Nunc consequat interdum varius sit amet mattis vulputate.",
          content: `Nascetur ridiculus mus mauris vitae ultricies leo integer malesuada. 
          Tortor posuere ac ut consequat semper viverra. Nisl tincidunt eget nullam non nisi est sit. 
          Etiam sit amet nisl purus in mollis.`,
          latitude: 64.055382,
          longitude: -21.830185,
          tripId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // 25
          title: "Massive POST!",
          content: `Eget gravida cum sociis natoque penatibus. Amet est placerat in egestas erat imperdiet sed euismod nisi. Urna cursus eget nunc scelerisque viverra mauris in aliquam. Ac odio tempor orci dapibus ultrices in iaculis nunc. Diam maecenas ultricies mi eget mauris pharetra et ultrices. Maecenas accumsan lacus vel facilisis volutpat est. 
          Erat nam at lectus urna duis convallis convallis. Ultrices eros in cursus turpis. Convallis convallis tellus id interdum velit laoreet id. Sed augue lacus viverra vitae congue eu. Morbi quis commodo odio aenean sed adipiscing diam. Tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium. Phasellus vestibulum lorem sed risus ultricies. 
          Eget arcu dictum varius duis at. Id diam vel quam elementum pulvinar etiam non. 
          Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. 
          Pharetra pharetra massa massa ultricies mi quis. Ut placerat orci nulla pellentesque dignissim enim sit. Tellus in metus vulputate eu scelerisque felis imperdiet proin.
          In fermentum posuere urna nec. Nisl rhoncus mattis rhoncus urna neque viverra justo. Dictum at tempor commodo ullamcorper a lacus vestibulum. In fermentum posuere urna nec tincidunt praesent. 
          Pretium fusce id velit ut tortor pretium. Eget egestas purus viverra accumsan in nisl nisi scelerisque eu. Convallis convallis tellus id interdum velit laoreet id. Id venenatis a condimentum vitae sapien pellentesque habitant morbi tristique. 
          Ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae. Lobortis elementum nibh tellus molestie nunc non blandit massa enim. Sed faucibus turpis in eu. Nec dui nunc mattis enim ut tellus elementum sagittis vitae. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Eget dolor morbi non arcu risus quis. 
          Natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. 
          Fames ac turpis egestas maecenas pharetra convallis posuere. Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum. Habitant morbi tristique senectus et netus et malesuada fames ac. Magna fermentum iaculis eu non. 
          Tristique senectus et netus et malesuada.`,
          latitude: -22.898948,
          longitude: -43.122168,
          tripId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Est reprehenderit duis incididunt minim est aute.",
          content: `Eget nullam non nisi est sit amet facilisis magna etiam. Laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt. Feugiat in ante metus dictum at tempor commodo. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Mattis pellentesque id nibh tortor id aliquet lectus proin. 
          Faucibus ornare suspendisse sed nisi lacus sed viverra tellus.`,
          latitude: -23.563987,
          longitude: -46.657329,
          tripId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Dui nunc mattis enim ut tellus elementum. ",
          content: `Et malesuada fames ac turpis egestas. Arcu non sodales neque sodales ut etiam sit amet nisl. 
          Adipiscing elit pellentesque habitant morbi tristique senectus et netus. Tempus iaculis urna id volutpat lacus laoreet. Id cursus metus aliquam eleifend mi in nulla. Quis hendrerit dolor magna eget est lorem. Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat. 
          Integer malesuada nunc vel risus commodo viverra maecenas.`,
          latitude: -22.847071,
          longitude: -43.287066,
          tripId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Feugiat in ante metus dictum at tempor commodo.",
          content: `Volutpat lacus laoreet non curabitur. Rhoncus est pellentesque elit ullamcorper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. 
          Eget nullam non nisi est sit amet facilisis magna etiam. Laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt. 
          Feugiat in ante metus dictum at tempor commodo. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Mattis pellentesque id nibh tortor id aliquet lectus proin. Faucibus ornare suspendisse sed nisi lacus sed viverra tellus. Ultrices dui sapien eget mi proin sed libero. Dui nunc mattis enim ut tellus elementum. Volutpat commodo sed egestas egestas fringilla phasellus faucibus. Enim tortor at auctor urna nunc id cursus. Aliquam etiam erat velit scelerisque in dictum non consectetur a. Purus sit amet volutpat consequat mauris nunc. Nec ultrices dui sapien eget mi proin sed libero. Cursus eget nunc scelerisque viverra mauris in aliquam sem. 
          At elementum eu facilisis sed odio morbi quis. Porttitor eget dolor morbi non arcu risus quis.`,
          latitude: 52.167194,
          longitude: -355.524647,
          tripId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Volutpat lacus laoreet non curabitur.",
          content: `Tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque. 
          Blandit massa enim nec dui. Leo vel orci porta non pulvinar neque laoreet. Odio facilisis mauris sit amet massa. 
          Quis risus sed vulputate odio ut enim. Non diam phasellus vestibulum lorem. Tortor aliquam nulla facilisi cras fermentum odio. Et malesuada fames ac turpis egestas maecenas pharetra convallis posuere. Eget duis at tellus at urna condimentum mattis pellentesque. 
          Malesuada fames ac turpis egestas maecenas pharetra convallis posuere morbi.`,
          latitude: 52.368892,
          longitude: -355.145366,
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
