const express = require("express");

const Clothing = require("../models/clothing-model.js");

const router = express.Router();


// GET /closet - Retrieve the list of clothing
router.get("/closet", (req, res, next) => {
  Clothing.find()
    // sort the newest clothing first
    .sort({ createdAt: -1 })
    .limit(20)
    // send the query results as a JSON response to the client
    .then(clothingResults => res.json(clothingResults))
    .catch(err => next(err));
});

// POST /clothing - Create a new clothing item (add to the wardrobe)
router.post("/closet", (req, res, next) => {
  const { model, brand, price, image, specs } = req.body;

  Clothing.create({ model, brand, price, image, specs })
    // send the query results as a JSON response to the client
    .then(phoneDoc => res.json(phoneDoc))
    .catch(err => next(err));
});

// GET /phones/:id - Retrieve the details of ONE phone
router.get("/phones/:id", (req, res, next) => {
  const { id } = req.params;
  Phone.findById(id)
    // send the query results as a JSON response to the client
    .then(phoneDoc => res.json(phoneDoc))
    .catch(err => next(err));
});

// PUT /phones/:id - Update ONE phone
router.put("/phones/:id", (req, res, next) => {
  const { id } = req.params;
  const { model, brand, price, image, specs } = req.body;

  Phone.findByIdAndUpdate(
    id,
    { $set: { model, brand, price, image, specs } },
    // "new" gets the update version of the document
    { runValidators: true, new: true },
  )
  .then(phoneDoc => res.json(phoneDoc))
  .catch(err => next(err));
});

// DELETE /phones/:id - Delete ONE phone
router.delete("/phones/:id", (req, res, next) => {
  const { id } = req.params;
  Phone.findByIdAndRemove(id)
    .then(phoneDoc => res.json(phoneDoc))
    .catch(err => next(err));
});


module.exports = router;