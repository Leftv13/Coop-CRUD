const express = require("express");
const routerMaths = express.Router();

// include auxiliary functions
const {
  sortByViewsAscending,
  sortByViewsDescending,
} = require("../auxiliaryFunctions.js");

const { maths } = require("../data/courses.js").infoCourses;

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

  if (req.query.orderdescending === "views"){
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
      .status(404)
      .json(`Could not find ${subject} courses of ${level} level :(`);
  }

  res.send(JSON.stringify(results));
});

// Query params

module.exports = routerMaths;
