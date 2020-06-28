"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "pictures",
      [
        {
          imageUrl:
            "https://cdn.pixabay.com/photo/2012/08/27/14/19/evening-55067__340.png",
          caption: "Tempor sit occaecat deserunt.",
          postId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl:
            "https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          caption: "Tempor sit occaecat deserunt.",
          postId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl: "https://unsplash.com/photos/twukN12EN7c/download",
          caption: "Tempor sit occaecat deserunt.",
          postId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // {
        //   imageUrl:
        //     "https://learn.zoner.com/wp-content/uploads/2018/08/landscape-photography-at-every-hour-part-ii-photographing-landscapes-in-rain-or-shine.jpg",
        //   caption: "Tempor sit occaecat deserunt.",
        //   postId: 5,
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        // {
        //   imageUrl:
        //     "https://www.digidirect.com.au/media/blogs/19_08_AUG/Wide_angle_lens_landscape/pietro-de-grandi-T7K4aEPoGGk-unsplash.jpg",
        //   caption: "Tempor sit occaecat deserunt.",
        //   postId: 6,
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        // {
        //   imageUrl:
        //     "https://iso.500px.com/wp-content/uploads/2017/10/PhotographingTwilight_TannerWendellStewart-218136823.jpg",
        //   caption: "Tempor sit occaecat deserunt.",
        //   postId: 7,
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        // {
        //   imageUrl:
        //     "https://iso.500px.com/wp-content/uploads/2014/07/big-one.jpg",
        //   caption: "Tempor sit occaecat deserunt.",
        //   postId: 9,
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        // {
        //   imageUrl: "https://i.vimeocdn.com/video/703876203_640.jpg",
        //   caption: "Tempor sit occaecat deserunt.",
        //   postId: 10,
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        // {
        //   imageUrl:
        //     "https://lh3.googleusercontent.com/-H6PacdskbPehw_P3NQvLvIix3PK3gNC82AZXhpFhYm5PVY26CqyHieUp_jifhmYY-FrcezAVQ=w640-h400-e365",
        //   caption: "Tempor sit occaecat deserunt.",
        //   postId: 11,
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        // {
        //   imageUrl:
        //     "https://imgc.artprintimages.com/img/print/sunrise-at-moraine-lake_u-l-q10cvfe0.jpg?p=0",
        //   caption: "Tempor sit occaecat deserunt.",
        //   postId: 13,
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        // {
        //   imageUrl:
        //     "https://mymodernmet.com/wp/wp-content/uploads/2019/05/wide-angle-landscape-photography-tutorial-mads-peter-iversen-2.jpg",
        //   caption: "Tempor sit occaecat deserunt.",
        //   postId: 14,
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        // {
        //   imageUrl:
        //     "https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        //   caption: "Tempor sit occaecat deserunt.",
        //   postId: 15,
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("pictures", null, {});
  },
};
