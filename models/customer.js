'use strict';
module.exports = (sequelize, DataTypes) => {
    const Customer = sequelize.define('Customer', {
        customer_name: DataTypes.STRING
    }, {});
    Customer.associate = function (models) {
        // Customer.hasMany(models.burger, {
        //     onDelete: "cascade"
        // });
    };
    return Customer;
};