const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "dheeraj53",
  database: "practice",
});

connection.query("SELECT * FROM COURSE", function (err, results, fields) {
  console.log(results); // results contains rows returned by server
  console.log(fields); // fields contains extra meta data about results, if available
});
