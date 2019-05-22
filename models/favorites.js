module.exports = function(sequelize, DataTypes) {
  var Favorites = sequelize.define("Favorites", {
    Article: {
      type: DataTypes.STRING,
      allowNull: false
    },
    size: DataTypes.STRING,

    note: DataTypes.STRING
  });

  Favorites.associate = function(models) {
    Favorites.belongsTo(models.Spouse, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Favorites;
};
