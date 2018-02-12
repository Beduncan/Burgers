var connection = require("./connction.js")

var orm = {
	selectAll: function (CB) {
		//select all from table 
		var queryString = "SELECT * FROM burgers";
    	connection.query(queryString, function(err, result) {
      	if (err) throw err;
      		CB(result);
    	});
	}
	// updateOne: function(table, col, row){
	// 	//select from "table" to the "select col" in this "row"
	// 	var queryString = "UPDATE burgers SET ? WHERE ?",
 //    	connection.query(queryString, [tableInput, col, row], function(err, result) {
	// 	if (err) throw err;
	// 	console.log(result);
	// 	});
	// }
	// insertOne: function(CB, row){
	// 	//insert into this "table" on this "row"
	// 	var queryString = "INSERT INTO burgers SET ?",
	// 	connection.query(queryString, row, function(err, result){
	// 		if err throw err;
	// 		console.log(result);
	// 	})
	// }
}
module.exports = orm;

