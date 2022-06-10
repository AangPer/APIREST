const express = require("express");
const app = express();
const cors = require("cors");
const userRouteHandler = require("../routes/user");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.userRoutePath = "/api/users";

    //Middlewares
    this.middlewares();

    //Routes
    this.routes();
  }

  middlewares() {
    //CORS
    this.app.use(cors());

    //Reading and body parse to JSON
    this.app.use(express.json());

    //Directorio publico
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.userRoutePath, userRouteHandler);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en el puerto", this.port);
    });
  }
}

module.exports = Server;
