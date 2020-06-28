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
  trip.associate = function (models) {
    // associations can be defined here
    trip.belongsTo(models.user);
    trip.hasMany(models.post);
  };
  return trip;
};
