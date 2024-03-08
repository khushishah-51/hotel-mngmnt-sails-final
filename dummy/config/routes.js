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
  'POST /admin/guest/add': {action:'GuestController.addGuest', cors: false},
  'PUT /admin/guest/update/:id': {action:'GuestController.updateGuest', cors: false},
  'GET /admin/guest': {action:'GuestController.listGuest', cors: false},
  'DELETE /admin/guest/delete/:id': {action:'GuestController.deleteGuest', cors: false},

  //Menu
  'POST /admin/menu/add': {action:'MenuController.addMenu', cors: false},
  'PUT /admin/menu/update/:id': {action:'MenuController.updateMenu', cors: false},
  'GET /admin/menu': {action:'MenuController.listMenu', cors: false},
  'DELETE /admin/menu/delete/:id': {action:'MenuController.deleteMenu', cors: false},

  //Room
  'POST /admin/room/add': {action:'RoomController.addRoom', cors: false}, 
  'PUT /admin/room/update/:id': {action:'RoomController.updateRoom', cors: false},
  'GET /admin/room': {action:'RoomController.listRoom', cors: false},
  'DELETE /admin/room/delete/:id': {action:'RoomController.deleteRoom', cors: false},
  
  //User(Review)
  'POST /userfeed/add': 'UserController.addReview',
  'GET /userfeed': 'UserController.listReview',

  //Register
  'POST /signup': 'RegisterController.signup',
  'POST /login': 'RegisterController.login',
  'POST /admin': {action:'RegisterController.admin', cors: false},
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
