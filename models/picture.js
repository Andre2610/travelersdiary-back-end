"use strict";
module.exports = (sequelize, DataTypes) => {
  const picture = sequelize.define(
    "picture",
    {
      imageUrl: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {}
  );
  picture.associate = function (models) {
    picture.belongsTo(models.post);
  };
  return picture;
};
