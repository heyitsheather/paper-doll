const express = require("express");

const User = require("../models/user-model.js");

const router = express.Router();



// // GET /user/:id - Retrieve the details of ONE user
router.get("/user/:id", (req, res, next) => {
  const { id } = req.params;
  User.findById(id)
//     // send the query results as a JSON response to the client
    .then(userDoc => res.json(userDoc))
    .catch(err => next(err));
});

// // PUT /user/:id - Update ONE user
router.put("/user/:id", (req, res, next) => {
  const { id } = req.params;
  const { chest, waist, hips, inseam } = req.body;

  User.findByIdAndUpdate(
    id,
    { $set: { chest, waist, hips, inseam } },
    // "new" gets the update version of the document
    { runValidators: true, new: true },
  )
  .then(userDoc => res.json(userDoc))
  .catch(err => next(err));
});



module.exports = router;


