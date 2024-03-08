/**
 * Room.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    roomNumber: { type: 'number', required: true, unique: true },
    guestName: { type: 'string', required: true }
  },

};
