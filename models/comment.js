"use strict";
module.exports = (sequelize, DataTypes) => {
  const comment = sequelize.define(
    "comment",
    {
      comment: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      postId: {
        type: Sequelize.INTEGER,
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
  user.associate = function (models) {
    // associations can be defined here
  };
  return comment;
};
