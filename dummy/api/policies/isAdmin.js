
module.exports = async function(req, res, next) {
    if (req.session && req.session.isAdmin) {
      // If session has isAdmin set to true, proceed to next middleware/route handler
      return next();
    } else {
      // If not authenticated, redirect or send an error response
      return res.status(403).send('Unauthorized');
    }
  };
  