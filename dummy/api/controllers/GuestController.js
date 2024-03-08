/**
 * GuestController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


module.exports = {
    addGuestForm: async function(req, res) {
      return res.view('Guest/addGuest');
    },
  
    addGuest: async function(req, res) {
      try {
        const newGuest = await Guest.create(req.body).fetch();
        return res.redirect('/admin/guest');
      } catch (err) {
        sails.log.error(err);
        return res.badRequest('Unable to add this guest');
      }
    },
  
    updateGuestForm: async function(req, res) {
      try {
        const guest = await Guest.findOne({ id: req.params.id });
        return res.view('Guest/updateGuest', { guest });
      } catch (err) {
        sails.log.error(err); 
        return res.notFound('Guest not found');
      }
    },
  
    updateGuest: async function(req, res) {
      try {
        const updatedGuest = await Guest.updateOne({ id: req.params.id }).set(req.body);
        if (updatedGuest) {
          return res.redirect('/admin/guest');
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
        return res.view('Guest/listGuests', { guests, searchQuery: req.query.guestName });
      } catch (err) {
        sails.log.error(err); 
        return res.serverError('Internal Server Error');
      }
    },
  
    deleteGuestForm: async function(req, res) {
      try {
        const guest = await Guest.findOne({ id: req.params.id });
        return res.view('Guest/deleteGuest', { guest });
      } catch (err) {
        sails.log.error(err); 
        return res.notFound('Guest not found');
      }
    },
  
    deleteGuest: async function(req, res) {
      try {
        const deletedGuest = await Guest.destroyOne({ id: req.params.id });
        if (deletedGuest) {
          return res.redirect('/admin/guest');
        } else {
          return res.notFound('Guest not found');
        }
      } catch (err) {
        sails.log.error(err); 
        return res.badRequest('Unable to delete this guest');
      }
    }
  };
  