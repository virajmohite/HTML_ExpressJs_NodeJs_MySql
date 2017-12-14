var express =  require("express");
var bodyParser = require('body-parser');
var mysql = require("mysql");

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
var connection = mysql.createConnection({
	//properties
	host: 'localhost',	
	user: 'root',
	password: '',
	database: 'Demo_db'
});
connection.connect(function(error){
	if(!!error){
		console.log('Error');
	}else{
		console.log('Connected');
	}

});


app.get('/select', function(req, resp){
	// about mysql
	 connection.query("SELECT * FROM demo_tb", function(error, rows, fields){
		//callback 
		if(!!error){
			console.log('Error in the query');
		}else{
			/* console.log('Successful query');
			console.log(rows[4].Name);
			 //resp.send(rows);
			//resp.send('Successfully!');
			//resp.send(rows[4].Name); */
			resp.json(rows);
		}
	});
});
app.post('/insert_method', function(req, resp){
		
		// var queryInsert = "insert into user_log (u_name,u_email,u_mobile,u_city,u_password,u_timestamp) values ('"+req.body.u_name+"','"+req.body.u_email+"','"+req.body.u_mobile+"','"+req.body.u_city+"','"+req.body.u_password+"', NOW())";
		 var queryInsert = "INSERT INTO demo_tb (name, email, message) VALUES ('"+req.body.name+"','"+req.body.email+"','"+req.body.message+"')";
		
		connection.query(queryInsert, function(error,result){
		if(error)
			   {
				   throw error;
			   }
		   else 
			   {
				 resp.send("Inserted");
			   }
		});
});
app.post('/delete_method', function(req, resp){
		
		// var queryInsert = "insert into user_log (u_name,u_email,u_mobile,u_city,u_password,u_timestamp) values ('"+req.body.u_name+"','"+req.body.u_email+"','"+req.body.u_mobile+"','"+req.body.u_city+"','"+req.body.u_password+"', NOW())";
		 var queryInsert = "DELETE from user where id='"+req.body.id+"'";		
		connection.query(queryInsert, function(error,result){
		if(error)
			   {
				   throw error;
			   }
		   else 
			   {
				 resp.send("Deleted");
			   }
		});
});

app.post('/update_method', function(req, resp){
		
		// var queryInsert = "insert into user_log (u_name,u_email,u_mobile,u_city,u_password,u_timestamp) values ('"+req.body.u_name+"','"+req.body.u_email+"','"+req.body.u_mobile+"','"+req.body.u_city+"','"+req.body.u_password+"', NOW())";
		var queryInsert = "UPDATE user SET username = '"+req.body.username+"',password = '"+req.body.password+"' WHERE id = '"+req.body.id+"'";		
		connection.query(queryInsert, function(error,result){
		if(error)
			   {
				   throw error;
			   }
		   else 
			   {
				 resp.send("Updated");
			   }
		});
});
app.listen(8081);