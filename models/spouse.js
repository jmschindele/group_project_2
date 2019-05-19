module.exports = function(sequelize, DataTypes) {
  var Spouse = sequelize.define("Spouse", {
    spouseName: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Spouse.associate = function(models){
      Spouse.belongsTo(models.User, {
          foreignKey: {
              allowNull: false,
          }
      });
  };

   Spouse.associate = function(models) {
     Spouse.hasMany(models.Clothing, {});
   };

  return Spouse;
};
