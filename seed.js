// This file should contain all the record creation needed to seed the database with its default values.
// The data can then be loaded with the node seed.js

let Promise = require('bluebird');
let db = require('./models');
let Categories = require('./models/categories');
let Courses = require('./models/courses');
let Prompts = require('./models/prompts');
let Replies = require('./models/replies');
let Students = require('./models/students');
let Teachers = require('./models/teachers');



let data = {
  categories: [
    {content: "Verbs" },
    {content: "Adverbs" },
    {content: "Nouns" }
  ],
  courses: [
    {course: "ENG 201" },
    {course: "MATH 300" },
    {course: "CIS 452" }
  ],
  prompts: [
    {content: "Describe a paragraph using a verb." },
    {content: "Incorporate proper nouns into a sentence." },
    {content: "Use an adverb." }
  ],
  replies: [
    {content: "The dog jumped.", feedback: "Good use of verb." },
    {content: "Rummy is a dog.", feedback: "Excellent proper noun use." },
    {content: "Rummy stood handsomely.", feedback: "Try harder next time." }
  ],
  students: [
    {first: "Fred", last: "Jones" , email: "fjones@email.com"},
    {first: "Samantha", last: "Smith" , email: "sammys@email.com"},
    {first: "Juan", last: "Garcia" , email: "numerojuan@email.com"}
  ],
  teachers: [
    {first: "Janice", last: "Elliot" , email: "jelliot@email.com"},
    {first: "Mark", last: "Goodteach" , email: "mark@email.com"},
    {first: "Claudia", last: "Whitesox" , email: "claud@email.com"}
  ],
};

db.sync({force: true})
.then(function () {
  console.log("Dropped old data, now inserting data");
  return Promise.map(Object.keys(data), function (name) {
    return Promise.map(data[name], function (item) {
      return db.model(name)
      .create(item);
    });
  });
})
.then(function () {
  console.log("Finished inserting data (press ctrl-c to exit)");
})
.catch(function (err) {
  console.error('There was totally a problem', err, err.stack);
});
