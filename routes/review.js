const express=require("express");
const router=express.Router({mergeParams:true});
const Review=require("../models/review.js");
const Listing=require("../models/listing.js");
const wrapAsync=require("../utils/wrapAsync.js");
const{validateReview, isLoggedIn, isReviewAuthor}=require("../middleware.js")

const reviewcontroler=require("../controllers/review.js");

//Reviews
//Post review route
router.post(
    "/",
    isLoggedIn,
    validateReview,
    wrapAsync(reviewcontroler.createReview),
);

//delete review route
router.delete(
    "/:reviewId",
    isLoggedIn,
    isReviewAuthor,
    wrapAsync(reviewcontroler.destroyReview),
);

module.exports =router;