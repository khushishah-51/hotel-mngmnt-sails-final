module.exports = {
    attributes: {
        name: { type: 'string', required: true },
        review: { type: 'string', required: true },
        rating: { type: 'number', required: true, min: 1, max: 5 },
    },
};
