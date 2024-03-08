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
  'POST /admin/guest/add': 'isAdmin',
  'PUT /admin/guest/update/:id': 'isAdmin',
  'GET /admin/guest': 'isAdmin',
  'DELETE /admin/guest/delete/:id': 'isAdmin',

  //Menu
  'POST /admin/menu/add': 'isAdmin',
  'PUT /admin/menu/update/:id': 'isAdmin',
  'GET /admin/menu': 'isAdmin',
  'DELETE /admin/menu/delete/:id': 'isAdmin',

  //Room
  'POST /admin/room/add': 'isAdmin',
  'PUT /admin/room/update/:id': 'isAdmin',
  'GET /admin/room': 'isAdmin',
  'DELETE /admin/room/delete/:id': 'isAdmin'


};
