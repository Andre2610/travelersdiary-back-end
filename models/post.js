"use strict";
module.exports = (sequelize, DataTypes) => {
  const post = sequelize.define(
    "post",
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      geotag: DataTypes.STRING,
    },
    {}
  );
  post.associate = function (models) {
    // associations can be defined here
    post.belongsTo(models.trip);
    post.hasMany(models.picture);
    post.belongsToMany(models.user, {
      through: "likes",
      foreignKey: "postId",
    });
    post.belongsToMany(models.user, {
      through: "comments",
      foreignKey: "postId",
    });
  };
  return post;
};
