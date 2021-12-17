# 471Project

Deployment Instructions: 

Need to make sure to have node and vscode downloaded on the local machine.

First we have to clone the repository: https://github.com/dkumar1997/471Project.git
Then we must cd into each individual folder (client, server)
In each folder we must run npm i to install all the dependencies.
We run the server by opening up a terminal -> cd in to server folder -> then run the command node server.js
We run the client by opening up a terminal -> cd in to client folder -> then run the command npm start

The server for requests should be running on http://localhost:5000
The front end should be running on http://localhost:3000

To connect to the database, import the schema into mysql workbench and change the parameters to the connection string in server/server.js
