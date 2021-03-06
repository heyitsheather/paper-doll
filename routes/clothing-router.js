const express = require("express");

const Clothing = require("../models/clothing-model.js");

const router = express.Router();



// // Filter by itemOwner
// Clothing.find({ itemOwner: { $eq: req.user._id } })
//   .then(clothingResults => res.json(clothingResults))
//   .catch(err => next(err));


// // Filter by user's measurements (exact matches only)
router.get("/matchclothing", (req, res, next) => {
Clothing.find({
    itemChest: { $eq: req.user.chest },
    itemWaist: { $eq: req.user.waist },
    itemHips: { $eq: req.user.hips },
    itemInseam: { $eq: req.user.inseam }
  })
  .then(clothingResults => res.json(clothingResults))
  .catch(err => next(err));
});


// GET /clothing - Retrieve the list of clothing
router.get("/clothing", (req, res, next) => {
  Clothing.find({ itemOwner: { $eq: req.user._id } })
    // sort the newest clothing first
    .sort({ createdAt: -1 })
    .limit(20)
    // send the query results as a JSON response to the client
    .then(clothingResults => res.json(clothingResults))
    .catch(err => next(err));
});


// POST /clothing - Create a new clothing item (add to the wardrobe)
router.post("/clothing", (req, res, next) => {
  const { type, link, brand, price, size, image, notes, width, height } = req.body;
  

  Clothing.create({itemOwner: req.user._id,
     itemChest: req.user.chest,
      itemWaist: req.user.waist, 
      itemHips: req.user.hips,
      itemInseam: req.user.inseam, 
      type, link, brand, price, size, image, notes, width, height })
    // send the query results as a JSON response to the client
    .then(clothingDoc => res.json(clothingDoc))
    .catch(err => next(err));
});

// GET /clothing/:id - Retrieve the details of ONE clothing item
router.get("/clothing/:id", (req, res, next) => {
  const { id } = req.params;
  Clothing.findById(id)
    // send the query results as a JSON response to the client
    .then(clothingDoc => res.json(clothingDoc))
    .catch(err => next(err));
});

// PUT /clothing/:id - Update ONE clothing item
router.put("/clothing/:id", (req, res, next) => {
  const { id} = req.params;
  const { type, link, brand, price, notes } = req.body;

  Clothing.findByIdAndUpdate(
    id,
    { $set: { type, link, brand, price, notes  } },
    // "new" gets the update version of the document
    { runValidators: true, new: true },
  )
  .then(clothingDoc => res.json(clothingDoc))
  .catch(err => next(err));
});

// DELETE /clothing/:id - Delete ONE clothing item
router.delete("/clothing/:id", (req, res, next) => {
  const { id } = req.params;
  Clothing.findByIdAndRemove(id)
    .then(clothingDoc => res.json(clothingDoc))
    .catch(err => next(err));
});


module.exports = router;