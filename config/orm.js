const connection = require("./connection");

const orm = {
    selectAll: function (cb) {
        connection.query("SELECT * FROM burgers", function (err, data) {
            if (err) cb(err, null);
            cb(null, data);
        });
    },
    selectAllBy: function (condition, value, cb) {
        const sqlQuery = `SELECT * FROM burgers WHERE ${condition } = ${value}`;
        connection.query(sqlQuery, function (err, data) {
            if (err) cb(err, null);
            cb(null, data)
        });
    },
    insertOne: function (burgerName, cb) {
        const sqlQuery = `INSERT INTO burgers(burger_name) VALUES('${burgerName}')`;
        connection.query(sqlQuery, function (err, data) {
            if (err) cb(err, null);
            cb(null, data);
        });
    },

    updateOne: function (condition, id, cb) {
        const sqlQuery = `UPDATE burgers SET is_favorite = ${condition} WHERE id = ${id}`;
        connection.query(sqlQuery, function (err, data) {
            if (err) cb(err, null);
            cb(null, data)
        });
    },

    deleteOne: function (id, cb) {
        const sqlQuery = `DELETE FROM burgers WHERE id = ${id}`;
        connection.query(sqlQuery, function (err, data) {
            if (err) cb(err, null);
            cb(null, data)
        });
    }
};

module.exports = orm;


// function printQuestionMarks(num) {
//     var arr = [];

//     for (var i = 0; i < num; i++) {
//         arr.push("?");
//     }

//     return arr.toString();
// }






// functionprintQuestionMarks(num) {
//     ``
//     var arr = [];

//     //loop through the keys and push the key/value as a string int arr
//     for (var key in ob)
//         var value = ob[key];
//     // check to skip hidden properties
//     if (Object.hasOwnProperty.call(ob, key)) {
//         //if string with spaces, add quotations
//         if (typeOf value === "string" && value.indexOf(" ") >= 0) {
//             value = "'" + value + "'";
//         }
//         arr.push(key + "=" + value);
//     }

// }

// translate array of strings to a single comma-separated string

// return arr.toString();