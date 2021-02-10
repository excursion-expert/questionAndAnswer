<img src="https://github.com/excursion-expert/questionAndAnswer/blob/main/WhiteBackgroundLogoSuperCropped.png">

# Question & Answer
I worked on a team of engineers designing Excursion Expert, a travel information site. I designed the question and answer service on the site, where users could ask and answer questions about particular locations.

The service was built with React, backed with a MongoDB database and Express server.

:rainbow: **_Want to skip to the fun part? Keep scrolling down to see GIFs of the site in action_** :rainbow:

### Getting Started

If you feel like checking out the project without setting everything up, scroll down to 'Usage' and check out the GIFs of the site in action!

1. Fork the repo and clone to your local machine.
2. Run 'npm install' from the root directory.
3. Install MongoDB.

You will also need to install nodemon if you do not already have it installed.

### Seeding the Database

This application requires data to be seeded into the database. The file server/seed.js accomplishes this task for you.

`npm run seed`

To make sure the data has seeded, run the following from the command line:

```
mongo
use fetcher
db.questions.find()
```

This will return all 100 primary records. Each primary record will consist of 1-50 questions, and 0-4 answers.

### Booting Up

To run this project in your web browser, run the following:

`npm run build`

This starts up webpack.

`npm start`

This will start the project in your web browser.

### Navigating Primary Records

If you navigate to your localhost, you will see an error that looks like the following:

<img src="https://github.com/excursion-expert/questionAndAnswer/blob/main/cannotget.png">

This is because you have not navigated to a primary record. You must include a primary record from 1-100 at the end of the url. For example:

`localhost:3004/3`

Once you have done this, you should see a web page that looks like the below screen grabs! 

## Usage
### Ask a Question

![Alt Text](https://github.com/excursion-expert/questionAndAnswer/blob/main/askquestion.gif "ask question")

### Answer a Question

![Alt Text](https://github.com/excursion-expert/questionAndAnswer/blob/main/answerquestion.gif "answer question")

### Previous/Next

![Alt Text](https://github.com/excursion-expert/questionAndAnswer/blob/main/prevnext.gif "previous page/next page")

### Thumbs Up/Thumbs Down

![Alt Text](https://github.com/excursion-expert/questionAndAnswer/blob/main/thumbsup.gif "thumbs up")

### Show all Answers

![Alt Text](https://github.com/excursion-expert/questionAndAnswer/blob/main/showallanswers.gif "show all answers")

## Acknowledgments

- [Font Awesome](https://fontawesome.com/)
- [Styled Components](https://styled-components.com/)
- [Axios](https://github.com/axios/axios)


