const express = require("express");
const routerMaths = express.Router();
const { maths } = require("../data/courses.js").infoCourses;

// Middleware
routerMaths.use(express.json());

// include auxiliary functions
const {
  sortByViewsAscending,
  sortByViewsDescending,
} = require("../auxiliaryFunctions.js");

// Only maths courses

routerMaths.get("/", (req, res) => {
  res.send(JSON.stringify(maths));
});

// Maths courses filter by subject
// Query parameters supported:
// - orderascending=views: Sorts the results by views in ascending order
// - orderdescending=views: Sorts the results by views in descending order

routerMaths.get("/:subject", (req, res) => {
  const subject = req.params.subject;
  const results = maths.filter(
    (course) => course.subject === subject.toLowerCase()
  );

  if (results.length === 0) {
    return res.status(404).send(`Could not find "${subject}" courses..`);
  }

  if (req.query.orderascending === "views") {
    return res.send(JSON.stringify(sortByViewsAscending(results)));
  }

  if (req.query.orderdescending === "views") {
    return res.send(JSON.stringify(sortByViewsDescending(results)));
  }

  res.send(JSON.stringify(results));
});

// Maths courses filter by subject & level

routerMaths.get("/:subject/:level", (req, res) => {
  const subject = req.params.subject;
  const level = req.params.level;

  const results = maths.filter(
    (courses) =>
      courses.subject.toLowerCase() === subject.toLowerCase() &&
      courses.level.toLowerCase() === level.toLowerCase()
  );

  if (results.length === 0) {
    return res
      .status(204)
      .json(`Could not find ${subject} courses of ${level} level :(`);
  }

  res.send(JSON.stringify(results));
});

// Post

routerMaths.post("/", (req, res) => {
  let newCourse = req.body;
  maths.push(newCourse);
  res.send(JSON.stringify(maths));
});

// Put

routerMaths.put("/:id", (req, res) => {
  const updatedCourse = req.body;
  const id = req.params.id;

  const index = maths.findIndex((course) => course.id == id);

  if (index >= 0) {
    maths[index] = updatedCourse;
  } else {
    return res
      .status(404)
      .json(`Maths course with id ${id} could not be found`);
  }
  res.send(JSON.stringify(maths));
});

// Patch

routerMaths.patch("/:id", (req, res) => {
  const updatedElement = req.body;
  const id = req.params.id;

  const index = maths.findIndex((course) => course.id == id);

  if (index >= 0) {
    const courseToBeModified = maths[index];
    Object.assign(courseToBeModified, updatedElement);
  } else {
    return res
      .status(404)
      .json(`Maths course with id ${id} could not be found`);
  }
  res.send(JSON.stringify(maths));
});

// Delete

routerMaths.delete("/:id", (req, res) => {
  const id = req.params.id;
  const index = maths.findIndex((course) => course.id == id);

  if (index >= 0) {
    maths.splice(index, 1);
  } else {
    return res
      .status(404)
      .json(`Maths course with id ${id} could not be found`);
  }
  res.send(JSON.stringify(maths));
});

module.exports = routerMaths;