const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "",
});

app.listen(port, () => console.log(`Listening on port ${port}`));
app.get("/", (req, res) => res.send("Hello World!"));

app.get("/get_user_credentials", (req, res) => {
  connection.query(
    `SELECT idUser FROM user where Username='${req.query.username}' and Password='${req.query.password}'`,
    function (err, response, body) {
      if (response) {
        let responseSent = null;
        response.length == 0
          ? (responseSent = 0)
          : (responseSent = response[0].idUser);
        res.json(responseSent);
      } else {
        res.json(err);
      }
    }
  );
});

app.post("/signup_user", (req, res) => {
  const body = req.body;
  connection.query(
    `CALL add_user('${body.username}','${body.password}','${body.email}','${body.firstName}','${body.lastName}','${body.address}','${body.sin}')`,
    function (err, response, body) {
      if (response) {
        let responseSent = null;
        response.length == 0
          ? (responseSent = 0)
          : (responseSent = response[0][0].idUser);
        res.json(responseSent);
      } else {
        res.json(err);
      }
    }
  );
});

app.get("/get_user_info", (req, res) => {
  connection.query(
    `CALL all_user_info(${req.query.userId})`,
    function (err, response, body) {
      if (response) {
        let responseSent = null;
        response.length == 0
          ? (responseSent = null)
          : (responseSent = response[0][0]);

        res.json(responseSent);
      } else {
        res.json(err);
      }
    }
  );
});

app.get("/get_platform_info", (req, res) => {
  connection.query(`CALL get_platforms()`, function (err, response, body) {
    if (response) {
      console.log(response);
      let responseSent = null;
      response.length == 0
        ? (responseSent = null)
        : (responseSent = response[0]);

      res.json(responseSent);
    } else {
      res.json(err);
    }
  });
});

app.get("/get_mp_for_riding", (req, res) => {
  connection.query(
    `CALL get_mp_for_riding(${req.query.userId})`,
    function (err, response, body) {
      if (response) {
        console.log(response);
        let responseSent = null;
        response.length == 0
          ? (responseSent = null)
          : (responseSent = response[0]);

        res.json(responseSent);
      } else {
        res.json(err);
      }
    }
  );
});

app.get("/get_didVote", (req, res) => {
  connection.query(
    `SELECT voteId FROM citizen where userId = ${req.query.userId}`,
    function (err, response, body) {
      if (response) {
        console.log(response);
        let responseSent = null;
        response.length == 0
          ? (responseSent = null)
          : (responseSent = response[0]);

        res.json(responseSent);
      } else {
        res.json(err);
      }
    }
  );
});

app.post("/submit_vote", (req, res) => {
  const body = req.body;
  console.log(body);
  connection.query(
    `CALL submit_vote('${body.userId}','${body.firstName}','${body.lastName}')`,
    function (err, response, body) {
      console.log(response[0][0]);
      if (response) {
        let responseSent = null;
        response.length == 0
          ? (responseSent = 0)
          : (responseSent = response[0][0].VoteId);
        res.json(responseSent);
      } else {
        res.json(err);
      }
    }
  );
});

app.get("/get_riding_stats", (req, res) => {
  connection.query(`CALL get_riding_stats()`, function (err, response, body) {
    if (response) {
      console.log(response);
      let responseSent = null;
      response.length == 0
        ? (responseSent = null)
        : (responseSent = response[0]);

      res.json(responseSent);
    } else {
      res.json(err);
    }
  });
});

app.get("/get_election_winners", (req, res) => {
  connection.query(
    `CALL get_election_winners()`,
    function (err, response, body) {
      if (response) {
        console.log(response);
        let responseSent = null;
        response.length == 0
          ? (responseSent = null)
          : (responseSent = response[0]);

        res.json(responseSent);
      } else {
        res.json(err);
      }
    }
  );
});
