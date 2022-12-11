import express from 'express';
import * as Joi from "joi";
const app = express();

app.use(app.json());

const courses = [
    {id:1, name: 'course1'},
    {id:2, name: 'course2'}
];

app.get('/', function (req, res) {
    res.send('hello world')
})

app.get('/api/courses', (req, res) => function () {
    res.send(courses);
})

app.post('/api/courses', (req, res) => {
   const schema = {
       name: Joi.string().min(3).required()
   };

   const result = Joi.validate(req.body, schema);
   if(result.error) {
       res.status(400).send(result.error.details[0].message);
       return;
   }

   const course = {
       id: courses.length + 1,
       name: req.body.name
   };

   courses.push(course);
   res.send(course);
});

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send('Not found');

    res.send(course);
});

app.put('/api/courses/:id', (req, res) => {
    res.send(req.params.id)
});


app.delete('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send('Not found');

    const index = course.indexOf(course);

    course.splice(index, 1);

    res.send(course);
});

app.listen(3333)