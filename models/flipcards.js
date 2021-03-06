// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var flipcard = {
  selectNext: function (vals, cb) {
    orm.selectNext("flipcard", vals, function (res) {
      cb(res);
    });
  },
  selectOne: function (vals, cb) {
    orm.selectOne("flipcard", vals, function (res) {
      cb(res);
    });
  },
  selectAll: function (cb) {
    orm.selectAll("flipcard", function (res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOneN: function (cols, vals, cb) {
    orm.insertOneN("newsletter", cols, vals, function (res) {
      cb(res);
    });
  },
  updateOne: function (objColVals, condition, cb) {
    orm.updateOne("flipcard", objColVals, condition, function (res) {
      cb(res);
    });
  },
  insertOne: function (cols, vals, cb) {
    orm.insertOne("flipcard", cols, vals, function (res) {
      cb(res);
    });
  }
};





// Export the database functions for the controller (flipcards_controller.js).
module.exports = flipcard;

