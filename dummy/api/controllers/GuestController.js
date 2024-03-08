/**
 * GuestController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
  
module.exports = {
  addGuest: async function(req, res) {
      try {
          const newGuest = await Guest.create(req.body).fetch();
          return res.json(newGuest); 
      } catch (err) {
          sails.log.error(err);
          return res.badRequest('Unable to add this guest');
      }
  },

  updateGuest: async function(req, res) {
      try {
          const updatedGuest = await Guest.updateOne({ id: req.params.id }).set(req.body);
          if (updatedGuest) {
              return res.json(updatedGuest); 
          } else {
            return res.notFound('Guest not found'); 
          }
      } catch (err) {
          sails.log.error(err);
          return res.badRequest('Unable to update this guest'); 
      }
  },

  listGuest: async function(req, res) {
      try {
          let query = {};
          if (req.query.guestName) {
              query = { guestName: req.query.guestName };
          }
          const guests = await Guest.find(query);
          return res.json(guests); 
      } catch (err) {
          sails.log.error(err);
          return res.serverError('Internal Server Error');
      }
  },

  deleteGuest: async function(req, res) {
      try {
          const deletedGuest = await Guest.destroyOne({ id: req.params.id });
          if (deletedGuest) {
              return res.json({ message: 'Guest deleted successfully' }); 
          } else {
            return res.notFound('Guest not found');
          }
      } catch (err) {
          sails.log.error(err);
          return res.badRequest('Unable to delete this guest');
      }
  }
};

