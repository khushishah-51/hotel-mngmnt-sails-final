
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
          const pageNumber = req.query.pageNumber || 1; // Default to page 1
          const pageSize = req.query.pageSize || 10; // Default page size
          const skip = (pageNumber - 1) * pageSize;          
          const reviews = await User.find().limit(pageSize).skip(skip);;
          return res.ok(reviews); 
        } catch (err) {
          sails.log.error(err);
          return res.serverError('Internal Server Error'); 
        }
      },  
} 
  