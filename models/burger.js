'use strict';
module.exports = (sequelize, DataTypes) => {
  const Burger = sequelize.define('Burger', {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    devoured: {
      type: DataTypes.BOOLEAN,
    },
    last_one_devoured: {
      type: DataTypes.BOOLEAN,
    },
    maker: {
      type: DataTypes.STRING,
    },
    eater: {
      type: DataTypes.STRING,
    },
  }, {});

  return Burger;
};