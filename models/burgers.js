var orm = require("../config/orm.js")
//createing varible to export
var burgers = {

 selectAll: function(callback){
    orm.selectAll(function(res){
      callback(res);
    });
  },

}
//exporting burgers to be called later
module.exports = burgers