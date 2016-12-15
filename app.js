let express = require('express');
let morgan = require('morgan');

const app = express();

let categoryRouter = require('./routes/categoriesRoute');
let replyRouter = require('./routes/repliesRoute');
let courseRouter = require('./routes/coursesRoute');
let studentRouter = require('./routes/studentsRoute');
let teacherRouter = require('./routes/teachersRoute');
let promptRouter = require('./routes/promptsRoute');


let bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan('default'));

app.use('/categories', categoryRouter);
app.use('/replies', replyRouter);
app.use('/courses', courseRouter);
app.use('/students', studentRouter);
app.use('/teachers', teacherRouter);
app.use('/prompts', promptRouter);


app.get('/', function (req, res, next) {
  res.send('HERE!')
});


app.use(function (err, req, res, next) {
    console.error(err, err.stack);
    res.status(500).send(err);
});

app.listen(3000, function(){
  console.log('Here on port 3000');
})

module.exports = app;
