module.exports = function(sequelize, DataTypes) {
  var Lovelang = sequelize.define("Lovelang", {
    LoveLanguage: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Priority: DataTypes.INTEGER
  });

  Lovelang.associate = function(models) {
    Lovelang.belongsTo(models.Spouse, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Lovelang;
};
