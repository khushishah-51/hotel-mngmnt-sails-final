
module.exports = {
    attributes: {
      roomNumber: { type: 'number', required: true, unique: true },
      roomType: { type: 'string', required: true },
      price: { type: 'number', required: true }
    }
  };
  