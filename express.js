const express = require(`express`)

const routerMaths = require('./routers/maths.js');

const routerProgramming = require('./routers/programming.js')


//const myCourses = require(`infoCourses`)

const {infoCourses} = require('./data/courses.js');
//const { json } = require('body-parser');

const app = express();

console.log(infoCourses);

//Routers
app.use("/api/courses/programming", routerProgramming);
app.use("/api/courses/maths", routerMaths);

//Routing


app.get('/api/courses', (req,res) =>{
    res.send(JSON.stringify(infoCourses));
} );


app.get("/", (req, res) => {
    res.send(`Hello world!`);
})

    const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
console.log(`The server is listening to the port ${PORT}..`);
} );
