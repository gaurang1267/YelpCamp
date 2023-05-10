
const Review = require('../models/reviews');
const Campground = require('../models/campgrounds');

module.exports.createReview = async (req, res) => {
    const campground = await Campground.findById(req.params.id);
    const review = new Review(req.body.review);
    review.author = req.user._id;
    campground.reviews.push(review);
    await review.save();
    await campground.save();
    // console.log(review);
    req.flash('success', 'Review successfully posted');
    res.redirect(`/campgrounds/${campground._id}`);
}

// module.exports.deleteReview = async (req, res) => {
//     const { id, reviewID } = req.params;
//     await Campground.findByIdAndUpdate(id, { $pull: { reviews: reviewID } });
//     await Review.findByIdAndDelete(reviewID);
//     req.flash('success', 'Review deleted successfully ');
//     res.redirect(`/campgrounds/${id}`);
// }