const processMessage = require('./process-message');

module.exports = (req, res) => {

  console.log("Req Body " + JSON.stringify(req.body));

  if (req.body.object === 'page') {
    req.body.entry.forEach(entry => {
      entry.messaging.forEach(event => {
        if (event.message && event.message.text) {
          processMessage(event);
        }
      });
    });

    res.status(200).end();
  }
};
