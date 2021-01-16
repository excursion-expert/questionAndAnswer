var faker = require('faker');
const mongoose = require('mongoose');
const { QuestionSet } = require('../database/index.js');
const { save } = require('../database/index.js');
const axios = require('axios')

// use "npm run seed" on command line from root directory to generate seed data

var getRandomPic = () => {
  var randomInt = Math.floor(Math.random() * (309-117) + 117)
  var nonExistIds = [138, 148, 150, 205, 207, 224, 226, 245, 246, 262, 285, 286, 298, 303]
  //The above IDs don't exist on picSum
  if (nonExistIds.indexOf(randomInt) > -1) {
    randomInt += 3;
    // Plus 3 will guarantee no duplication
    return 'https://picsum.photos/id/' + randomInt + '/200';
  } else {
    return 'https://picsum.photos/id/' + randomInt + '/200';
  }
}
var createNewData = (index) => {
  var randomNumQuestions = Math.floor(Math.random() * 50) + 5;
  var questionsArray = [];
  var answersArray = []
  let prevQuesDate;
  for (var i = 0; i < randomNumQuestions; i++) {
    if (prevQuesDate === undefined) {
      var question = {
          username: faker.name.findName(),
          profilePic: getRandomPic(),
          date: faker.date.past(),
          location: faker.address.city() + ', ' + faker.address.country(),
          numContributions: Math.floor(Math.random() * 200),
          numHelpfulVotes: Math.floor(Math.random() * 20),
          question: faker.lorem.sentence(),
          answer: []
      }
    } else {
      var question = {
          username: faker.name.findName(),
          profilePic: getRandomPic(),
          date: faker.date.past(0.2, prevQuesDate),
          location: faker.address.city() + ', ' + faker.address.country(),
          numContributions: Math.floor(Math.random() * 200),
          numHelpfulVotes: Math.floor(Math.random() * 20),
          question: faker.lorem.sentence(),
          answer: []
      }
    }
    questionsArray.push(question);
    prevQuesDate = question.date;
  }
  var newQuestionSet = new QuestionSet ({
    primaryRecord: index,
    questions: questionsArray
  })

  for (let j = 0; j < newQuestionSet.questions.length; j++) {
    var randomNumAnswers = Math.floor(Math.random() * 5);
    var minDate = newQuestionSet.questions[j].date;
    let prevAnsDate;
    var likesCeiling = 8;
    for (let k = 0; k < randomNumAnswers; k++) {
      var randomNumLikes = Math.floor(Math.random() * likesCeiling)
      likesCeiling = randomNumLikes;
      if (prevAnsDate === undefined) {
        var answer = {
          ansUsername: faker.name.findName(),
          ansProfilePic: getRandomPic(),
          ansDate: faker.date.between(minDate, '2020-11-15'),
          ansAnswer: faker.lorem.sentence(),
          likes: randomNumLikes
        };
      } else {
        var answer = {
          ansUsername: faker.name.findName(),
          ansProfilePic: getRandomPic(),
          ansDate: faker.date.between(prevAnsDate, '2020-11-15'),
          ansAnswer: faker.lorem.sentence(),
          likes: randomNumLikes
        };
      }
      newQuestionSet.questions[j].answers.push(answer);
      prevAnsDate = answer.ansDate;
    }
  }
  save(newQuestionSet);
  // This will save all new data into the Mongoose database
}

var generateNRecords = (n) => {
  for (var i = 1; i <= n; i++) {
    createNewData(i)
  }
}

generateNRecords(100);
// This invocation creates 100 records

module.exports = {
  createNewData,
  generateNRecords
}

exports.createNewData = createNewData;
exports.generateNRecords = generateNRecords;