const express = require("express");

const router = express.Router();
const {
  createReview,
  deleteReview,
  getReview,
  getAllReviews,
} = require("../controllers/reviews");

router.route("/").get(getAllReviews).post(createReview);

router.route("/:id").get(getReview).delete(deleteReview);

module.exports = router;
