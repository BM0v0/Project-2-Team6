# Project 2 Team 6

Deaf Zambian nationals need a resource for sign language. . Additionally, sign language in the region varies heavily, and could use some more consistency.

Type in a word or phrase and displays a youtube video/gif on how to perform the word or phrase in addition we will write an in depth description on how to perform the action.

## Basic Features:
Ability to search through word database. For each word, will display information as well as an instructional video. Users of the site can also add new words and embed videos, allowing for a collaboration.


## file structure:

```
Project-2-Team6/
  ├── config/
  |       ├── config.json
  ├── models/
  |       ├── Word.js
  |       ├── alphabetTable.csv
  |       ├── index.js
  |       └── schema.sql
  ├── public/
  |       ├── images/
  |       |   ├── Flag_of_Zambia.svg
  |       |   ├── SignLang2.png
  |       |   ├── SignLang3.png
  |       |   ├── ZambiaASL.png
  |       |   ├── victoriaFalls.jpg
  |       |   └── zambiaFlag.png
  |       ├── js/
  |       |   └── index.js
  |       ├── styles/
  |           └── styles.css
  ├── routes/ 
  |       |   ├── apiRoutes.js
  |       |   └── htmlRoutes.js
  ├── test/
  |       |   ├── canary.test.js
  |       |   ├── example.post.test.js
  |       |   └── example.test.js
  ├── views/
  |       ├── layouts/
  |       |   └── main.handlebars
  |       ├── 404.handlebars
  |       ├── addWord.handlebars
  |       ├── example.handlebars
  |       ├── index.handlebars
  |       ├── upload.php
  |       ├── viewLetter.handlebars
  |       └── viewWord.handlebars
  ├── .eslintignore
  ├── .eslintrc.json
  ├── .travis.yml
  ├── README.md
  ├── Makefile
  ├── package-lock.json
  ├── package.json
  └── server.js

```

## getting started

1. Check out this repo: `git clone git@github.com:BM0v0/Project-2-Team6.git`
2. Locate and open `Project-2-Team6` file directory in the command line/terminal.
3. Run `npm run start` in the command line/terminal to install necessary packages and start the server.
4. Open localhost:3000 in your browser and play around.
