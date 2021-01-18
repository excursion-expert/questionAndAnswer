<img src="https://github.com/excursion-expert/questionAndAnswer/blob/main/WhiteBackgroundLogoSuperCropped.png">

# Question & Answer
I worked on a team of engineers designing Excursion Expert, a travel information site. I designed the question and answer service on the site, where users could ask and answer questions about particular locations.

The service was built with React, backed with a MongoDB database. Styling was done with Styled Components.

### Getting Started

1. Fork the repo and clone to your local machine.
2. Run 'npm install' from the root directory.
3. Install MongoDB.

### Seeding the Database

This application requires data to be seeded into the database. The file server/seed.js accomplishes this task for you.

`npm run seed`

To make sure the data has seeded...

```
mongo
use fetcher
```

## Screen Grabs
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
