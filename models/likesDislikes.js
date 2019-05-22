module.exports = function(sequelize, DataTypes) {
  var Interests = sequelize.define("Interests", {
    type: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    note: DataTypes.STRING
  });

  Interests.associate = function(models) {
    Interests.belongsTo(models.Spouse, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Interests;
};
