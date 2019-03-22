const connection = require('../config/connection.js');

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(obj) {
    const arr = [];
    Object.keys(obj).map(function (key, index) {
        var value = obj[key];
        if (Object.hasOwnProperty.call(obj, key)) {
            // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
            if (typeof value === 'string' && value.indexOf(' ') >= 0) {
                key = `'${value}'`;
            }
            // e.g. {sleepy: true} => ['sleepy=true']
            arr.push(`${key}=${value}`);
        }
    });
    return `${arr.toString()}`;
};

const orm = {
    selectAll: function (table, cb) {
        const queryString = `SELECT * FROM ${table} ORDER BY burger_name ASC;`
        console.log(queryString);
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    insertOne: function (table, col, val, cb) {
        let queryString = `INSERT INTO ${table} (${col}) VALUES ('${val}');`
        connection.query(`UPDATE burgers SET last_one_devoured=?; INSERT INTO ?? (${col}) VALUES ('${val}')`, ['0', 'burgers'], function (err, result) {
            // connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    // An example of objColVals would be {name: panther, sleepy: true}
    updateOne: function (table, objColVals, condition, cb) {
        connection.query(`UPDATE burgers SET last_one_devoured=?; UPDATE ${table} SET last_one_devoured=? WHERE ${condition}; UPDATE ${table} SET devoured=? WHERE ${condition}`, ['0', '1', '1'], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    delete: function (table, condition, cb) {
        let queryString = `DELETE FROM ?? WHERE ${condition};`
        connection.query(queryString, table, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
};

module.exports = orm;