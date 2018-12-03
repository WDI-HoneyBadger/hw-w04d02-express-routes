# Week 4 Day 2 - You Got SERVED
## A homework about express routes

![](https://media.giphy.com/media/MHGaSNNTPYjHq/giphy.gif)


WOOHOOOO. Welcome, young padawan, to the world of full stack development. In unit 1 we focused on making pretty websites with colors and boxes and buttons and flexboxes and other fun things. Visual websites are part of what we call in the biz, the "front end". Now in unit 2 we are building SERVERS.  Servers are called the "back end" in web development.  A developer that can work on both the front end and the back end is called a "full stack developer". That's you!!  You're a full stack developer!

For the backend we'll be using express, a very handy tool for making javascript servers.

I can barely express how excited I am!!


## Assignment - Terms Dictionary!
For this assignment we will be making a server that serves up definitions FOR some of the terms we learned today.

## Setup:
You are given a file called `definitions.js` that contains an object with definitions for some words we learned today. If you look at this object you'll see that keys are the words, and the values are the definitions for those words.

## Part 1: Set up the server and the homepage:

Set up a brand new application called "terms-dictionary".

How do we do this?
1. clone this repo
2. change directories so you are in the cloned repo (`cd hw-w04d02-express-routes`)
3. create a new index.js file (`touch index.js`)
4. run `npm init` and go through the questions (hitting "enter" will use the default values).  This creates a `package.json` file for you automagically!
5. run `npm install express --save` to install express!
6. open everything in VSCode
7. configure your server in index.js!

When configuring your server take a look at the codealongs we did today.  Our express server for this assignment will be set up in the same way!  Try to avoid copy-pasting.  Type what you see so we can work on memorizing the setup.

When it is all setup make a home route so that when a user goes to `localhost:3000/` they see "welcome to the terms dictionary!!".

## Part 2:  Make routes for all our new terms!

Make a server with the following routes:
```
localhost:3000/server
localhost:3000/module
localhost:30000/module.exports
localhost:30000/node
localhost:30000/package
localhost:30000/npm
localhost:30000/package.json
localhost:30000/route
localhost:30000/request
localhost:30000/response
localhost:30000/parameter
```

Going to each route should return the definition for the word that is in the parameter.

For example, going to `localhost:3000/server` will display the text:
```
a server is a computer that serves websites or data to a 'client' (see localhost:3 0/client for the definition!).
```

and going to `localhost:3000/npm` will display the text:
```
npm stands for 'Node Package Manager'.  NPM is a place where 'packages' are hosted.  You can install code from here to be used in your own application!
```

Continue to make routes for all the terms in the `definitions.js` file


## due date:
Homework is due tonight at midnight!  Help each other, ask questions, eat food, sleep well, pet a puppy if you can.
