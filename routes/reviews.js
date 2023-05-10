const express = require('express');
const catchAsync = require('../utilities/catchAsync');
const { validateReview, isLoggedIn } = require('../middleware');
const router = express.Router({ mergeParams: true });
const reviews = require('../controllers/reviews');

router.post('/', isLoggedIn, validateReview, catchAsync(reviews.createReview));


module.exports = router; 