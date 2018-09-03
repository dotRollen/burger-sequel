module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
      burger_name: {
        type: DataTypes.STRING,
        allowNull: false, // Do not allow field to be null
        notEmpty: true // Do not allow field to be empty
      },
      devoured: {
          type: DataTypes.BOOLEAN,
          allowNull: false, // Do not allow field to be null
          defaultValue: false // Do not allow field to be empty
      },
    });

    Burger.associate = function(models) {
        Burger.belongsTo(models.Customer, {
          foreignKey: {
            allowNull: false
          }
        });
      };
  
    return Burger;
  };
  