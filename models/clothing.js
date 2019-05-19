module.exports = function(sequelize, DataTypes) {
  var Clothing = sequelize.define("Clothing", {
    clothingArticle: {
      type: DataTypes.STRING,
      allowNull: false
    },
    size: DataTypes.STRING,

    note: DataTypes.STRING
  });

  Clothing.associate = function(models) {
    Clothing.belongsTo(models.Spouse, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Clothing;
};
