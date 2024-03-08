/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  //Guest
  'POST /admin/guest/add': 'GuestController.addGuest',
  'PUT /admin/guest/update/:id': 'GuestController.updateGuest',
  'GET /admin/guest': 'GuestController.listGuest',
  'DELETE /admin/guest/delete/:id': 'GuestController.deleteGuest',

  //Menu
  'POST /admin/menu/add': 'MenuController.addMenu',
  'PUT /admin/menu/update/:id': 'MenuController.updateMenu',
  'GET /admin/menu': 'MenuController.listMenu',
  'DELETE /admin/menu/delete/:id': 'MenuController.deleteMenu',

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },


  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
