
module.exports = {
    // Add Review
    addReview: async function (req, res) {
      try {
        const newReview = await User.create(req.body).fetch();
        return res.json(newReview); 
      } catch (err) {
        sails.log.error(err);
        return res.badRequest('Unable to add this Review'); 
      }
    },
    // List all Reviews
    listReview: async function (req, res) {
        try {
          const reviews = await User.find();
          return res.ok(reviews); 
        } catch (err) {
          sails.log.error(err);
          return res.serverError('Internal Server Error'); 
        }
      },  
} 
  