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
  user.associate = function (models) {
    // associations can be defined here
  };
  return post;
};
