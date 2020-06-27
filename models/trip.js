"use strict";
module.exports = (sequelize, DataTypes) => {
  const trip = sequelize.define(
    "trip",
    {
      startDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      endDate: {
        type: DataTypes.DATE,
      },
    },
    {}
  );
  user.associate = function (models) {
    // associations can be defined here
  };
  return trip;
};
