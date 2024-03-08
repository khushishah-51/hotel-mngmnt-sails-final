
module.exports = {
    attributes: {
      menuName: { type: 'string', required: true, unique: true },
      menuDescription: { type: 'string', required: true },
      price: { type: 'number', required: true },
    },
  };
  
  