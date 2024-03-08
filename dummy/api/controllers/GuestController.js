/**
 * GuestController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
  
module.exports = {
   // Add Guest 
  addGuest: async function(req, res) {
      try {
          const newGuest = await Guest.create(req.body).fetch();
          return res.json(newGuest); 
      } catch (err) {
          sails.log.error(err);
          return res.badRequest('Unable to add this guest');
      }
  },
   // Update Guest 
  updateGuest: async function(req, res) {
      try {
          const updatedGuest = await Guest.updateOne({ id: req.params.id }).set(req.body);
          if (updatedGuest) {
            return res.ok(updatedGuest); 
          } else {
            return res.notFound('Guest not found'); 
          }
      } catch (err) {
          sails.log.error(err);
          return res.badRequest('Unable to update this guest'); 
      }
  },
  // Guest List
  listGuest: async function(req, res) {
      try {
          const guests = await Guest.find();
          return res.ok(guests); 
      } catch (err) {
          sails.log.error(err);
          return res.serverError('Internal Server Error');
      }
  },

  // Delete Guests 
  deleteGuest: async function(req, res) {
      try {
          const deletedGuest = await Guest.destroyOne({ id: req.params.id });
          if (deletedGuest) {
              return res.ok({ message: 'Guest deleted successfully' }); 
          } else {
            return res.notFound('Guest not found');
          }
      } catch (err) {
          sails.log.error(err);
          return res.badRequest('Unable to delete this guest');
      }
  }
};

