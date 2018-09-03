module.exports = function(sequelize, DataTypes) {
    var Customer = sequelize.define("Customer", {
      customer_name: {
        type: DataTypes.STRING,
        allowNull: false, // Do not allow field to be null
        notEmpty: true // Do not allow string field to be empty
    },
    });
  
    Customer.associate = function(models) {
        Customer.hasMany(models.Burger, {
          onDelete: "cascade"
      });
    };
    
    return Customer;
  };
  