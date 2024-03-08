// api/controllers/MenuController.js

module.exports = {
    // Add dish
    addMenu: async function (req, res) {
      try {
        const newMenu = await Menu.create(req.body).fetch();
        return res.json(newMenu); 
      } catch (err) {
        sails.log.error(err);
        return res.badRequest('Unable to add this Dish'); 
      }
    },
  
    // Update menu 
    updateMenu: async function (req, res) {
      try {
        const updatedMenu = await Menu.updateOne({ id: req.params.id }).set(req.body);
        if (updatedMenu) {
          return res.ok(updatedMenu); 
        } else {
          return res.notFound('Dish not found'); 
        }
      } catch (err) {
        sails.log.error(err);
        return res.serverError('Unable to update this Dish'); 
      }
    },
  
    // List all dishes
    listMenu: async function (req, res) {
      try {
        const menus = await Menu.find();
        return res.ok(menus); 
      } catch (err) {
        sails.log.error(err);
        return res.serverError('Internal Server Error'); 
      }
    },
  
    // Delete menu 
    deleteMenu: async function (req, res) {
      try {
        const deletedMenu = await Menu.destroyOne({ id: req.params.id });
        if (deletedMenu) {
          return res.ok({ message: 'Dish deleted successfully' }); 
        } else {
          return res.notFound('Menu not found'); 
        }
      } catch (err) {
        sails.log.error(err);
        return res.serverError('Unable to delete this Dish'); 
      }
    }
  };
  