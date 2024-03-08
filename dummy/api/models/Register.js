module.exports = {

    attributes: {
      name: {
        type: 'string',
        required: true
      },
      password: {
        type: 'string',
        required: true
      },
      isAdmin: {
        type: 'boolean',
        defaultsTo: false
      }
    }
  
  };
  