var { initializeApp, deleteApp } = require('./Firebase.js');
var Router = require('./Router');

module.exports = {

  // Top level entry point
  async api(req, res) {
    initializeApp();

    res.setHeader('Content-Type', 'application/json');

    try {
      await Router.route(req, res);
    } catch (e) {
      console.log(e);
      res.status(422).send({ errors: { body: [e.message], } });
    }

    deleteApp();
  }

};
