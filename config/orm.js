var connection = require("./connction.js")
var table = "burgers"
var orm = {

	selectAll: function (Cb) {
		//getting all for the table
		var queryString = "SELECT * FROM " + table;
		connection.query(queryString, function(err, res){
			if (err) throw err
			//calling the results of the quert to send into burger file
			Cb(res);
		});
	},
	insertOne: function(burgerName, Cb){
		//query funstion to insert on in to a table at ?
		var bur = String(burgerName);
		connection.query("INSERT INTO " + table + " SET ?",
		{
			burgers: bur,			
			devoured: false,
		},function(err, result){
			if (err) throw err;
			//calling back the results of the insert into
			Cb(result);
		});
	},
	Update: function()

};
module.exports = orm;

