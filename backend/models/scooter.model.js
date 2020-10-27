module.exports = (sequelize, Sequelize) => {
  const Scooter = sequelize.define("scooter", {

  });

  Scooter.associate = function(models) {
    Scooter.belongsTo(models.user, {
      onDelete: "CASCADE",
      foreignKey: "userId",
      as: "users",
    })
  }

  return Scooter;
};