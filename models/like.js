"use strict";
module.exports = (sequelize, DataTypes) => {
  const like = sequelize.define(
    "like",
    {
      like: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      postId: {
        type: DataTypes.INTEGER,
        references: {
          model: "posts",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
    },
    {}
  );
  like.associate = function (models) {
    // associations can be defined here
    like.belongsTo(models.user);
    like.belongsTo(models.post);
  };
  return like;
};
