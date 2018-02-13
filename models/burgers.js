var orm = require("../config/orm.js")
//createing varible to export
var burgers = {
  //
 selectAll: function(CB){
    orm.selectAll(function(res){
      CB(res);
    });
  },
  //
  insertOne: function(burgerName, CB){
  	orm.insertOne(function(res){
  		CB(res);
  	});
  },
  // updateOne: function(burger_id, CB){
  // 	orm.insertOne(function(res){
  // 		CB(res);
  // 	});
  // },
}
//exporting burgers to be called later
module.exports = burgers