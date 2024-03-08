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
  'GET /admin/guest/add': 'isAdmin',
  'POST /admin/guest/add': 'isAdmin',
  'GET /admin/guest/update/:id': 'isAdmin',
  'PUT /admin/guest/update/:id': 'isAdmin',
  'GET /admin/guest': 'isAdmin',
  'GET /admin/guest/delete/:id': 'isAdmin',
  'DELETE /admin/guest/delete/:id': 'isAdmin'

};
