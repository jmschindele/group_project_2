module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    userName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    hint: DataTypes.STRING
  });

  User.associate = function(models) {
    User.hasMany(models.Spouse, {});
  };

  return User;
};
