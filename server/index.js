const express = require('express');
const app = express();
const port = 3004;
const compression = require('compression')
const { QuestionSet } = require('../database/index.js');

app.use(compression());

app.use('/:listings_id', express.static(__dirname + '/../client/dist'));

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


app.get('/api/listings/:listings_id/questions', function(req, res) {
  var allUsers = QuestionSet.find({primaryRecord: req.params.listings_id}).exec((err, data) => {
    if (err) {
      console.log(err)
    } else {
      res.send(data)
    }
  })
})

app.post('/questions', function(req, res) {
  var newQuestion = QuestionSet.findOneAndUpdate({primaryRecord: 0}, {questions: req.body}).exec((err, data) => {
    if (err) {
      console.log(err)
    } else {
      res.send(data)
    }
  })
})

app.post('/questions/answers', function(req, res) {
  var newAnswer = QuestionSet.findOneAndUpdate({primaryRecord: 0}, {questions: [req.body]}).exec((err, data) => {
    if (err) {
      console.log(err)
    } else {
      res.send(data)
    }
  })
})
app.listen(port, () => console.log(`listening on port ${port}`))

module.exports = app;