// api/controllers/RoomController.js

module.exports = {
    // Add room
    addRoom: async function(req, res) {
      try {
        const newRoom = await Room.create(req.body).fetch();
        return res.json(newRoom); 
      } catch (err) {
        sails.log.error(err);
        return res.badRequest({ error: 'Unable to add this room' });
      }
    },
  
    // Update room
    updateRoom: async function(req, res) {
      try {
        const updatedRoom = await Room.updateOne({ id: req.params.id }).set(req.body);
        if (updatedRoom) {
          return res.ok(updatedRoom); // Return the updated room
        } else {
          return res.notFound({ error: 'Room not found' });
        }
      } catch (err) {
        sails.log.error(err);
        return res.badRequest({ error: 'Unable to update this room' });
      }
    },
  
    // List rooms
    listRoom: async function(req, res) {
      try {
        const rooms = await Room.find();
        return res.ok(rooms); // Return the list of rooms
      } catch (err) {
        sails.log.error(err);
        return res.serverError({ error: 'Internal Server Error' });
      }
    },
  
    // Delete room
    deleteRoom: async function(req, res) {
      try {
        const deletedRoom = await Room.destroyOne({ id: req.params.id });
        if (deletedRoom) {
          return res.ok({ message: 'Room deleted successfully' }); 
        } else {
          return res.notFound({ error: 'Room not found' });
        }
      } catch (err) {
        sails.log.error(err);
        return res.serverError('Unable to delete this Dish');
      }
    }
  };
  