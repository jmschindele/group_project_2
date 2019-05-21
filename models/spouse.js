module.exports = function(sequelize, DataTypes) {
  var Spouse = sequelize.define("Spouse", {
    spouseName: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Spouse.associate = function(models) {
    Spouse.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  Spouse.associate = function(models) {
    Spouse.hasMany(models.Clothing, {});
  };

  Spouse.associate = function(models) {
    Spouse.hasMany(models.Interests, {});
  };

  Spouse.associate = function(models) {
    Spouse.hasMany(models.Lovelang, {});
  };

  Spouse.associate = function(models) {
    Spouse.hasMany(models.Dates, {});
  };

  return Spouse;
};
