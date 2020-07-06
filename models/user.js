"use strict";
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    "user",
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
      },
      about: {
        type: DataTypes.TEXT,
      },
    },
    {}
  );
  user.associate = function (models) {
    // associations can be defined here
    user.hasMany(models.trip);
    user.belongsToMany(models.post, {
      through: "likes",
      foreignKey: "userId",
    });
    user.belongsToMany(models.post, {
      through: "comments",
      foreignKey: "userId",
    });
  };
  return user;
};
