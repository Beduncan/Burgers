var connection = require("./connction.js")

var orm = {
	selectAll: function (CB) {
		//select all from table 
		var queryString = "SELECT * FROM burgers";
    	connection.query(queryString, function(err, result) {
      	if (err) throw err;
      		CB(result);
    	});
	},
	//needs to insert one into the table at the end 
	insertOne: function(burgerName, CB){
		//insert into this "table" on this "row"
		var queryString = "INSERT INTO burgers SET ?";
		connection.query(queryString, {
			burgers: burgerName,
			devoured: false,
		}, function(err, result){
			if (err) throw err;
			CB(result);
		});
	},
	// updateOne: function(burger_id, CB){
	// 	//select from "table" to the "select col" in this "row"
	// 	var queryString = "UPDATE burgers SET ? WHERE ?",
 //    	connection.query(queryString, , function(err, result) {
	// 	if (err) throw err;
	// 	console.log(result);
	// 	});
	// }
}
module.exports = orm;

