module.exports = function(sequelize, DataTypes) {
  var Lovelang = sequelize.define("Lovelang", {
    LoveLanguage1: {
      type: DataTypes.STRING,
      allowNull: false
    },
    LoveLanguage2: {
      type: DataTypes.STRING,
      allowNull: false
    },
    LoveLanguage3: {
      type: DataTypes.STRING,
      allowNull: false
    },
    LoveLanguage4: {
      type: DataTypes.STRING,
      allowNull: false
    },
    LoveLanguage5: {
      type: DataTypes.STRING,
      allowNull: false
    }
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
