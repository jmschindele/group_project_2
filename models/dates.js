module.exports = function(sequelize, DataTypes) {
  var Dates = sequelize.define("Dates", {
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    event: DataTypes.STRING
  });

  Dates.associate = function(models) {
    Dates.belongsTo(models.Spouse, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Dates;
};
