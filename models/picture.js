"use strict";
module.exports = (sequelize, DataTypes) => {
  const picture = sequelize.define(
    "picture",
    {
      imageUrl: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      caption: DataTypes.TEXT,
    },
    {}
  );
  picture.associate = function (models) {
    // associations can be defined here
  };
  return picture;
};
