"use strict";
module.exports = (sequelize, DataTypes) => {
  const trip = sequelize.define(
    "trip",
    {
      tripTitle: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      startDate: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      endDate: {
        type: DataTypes.STRING,
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
