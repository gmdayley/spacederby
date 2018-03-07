// https://docs.particle.io/reference/javascript/#installation

var Particle = require("particle-api-js");
var particle = new Particle();

particle
  .getEventStream({
    deviceId: "mine",
    auth: process.env.PARTICLE_AUTH_TOKEN
  })
  .then(function(stream) {
    stream.on("bomb-dropped", function(data) {
      console.log("Event: ", data);
    });
  });
