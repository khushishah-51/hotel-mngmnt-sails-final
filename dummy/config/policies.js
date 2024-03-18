/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

module.exports.policies = {
  //Guest
  GuestController: {
  'addGuest': 'isAdmin',
  'updateGuest': 'isAdmin',
  'listGuest': 'isAdmin',
  'deleteGuest': 'isAdmin',
  },
  //Menu
  MenuController: {
  'addMenu': 'isAdmin',
  'updateMenu': 'isAdmin',
  'listMenu': 'isAdmin',
  'deleteMenu': 'isAdmin',
  },

  //Room
  RoomController: {
  'addRoom': 'isAdmin',
  'updateRoom': 'isAdmin',
  'listRoom': 'isAdmin',
  'deleteRoom': 'isAdmin'
  }

};
