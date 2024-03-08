const bcrypt = require('bcrypt');

function validateName(name) {
    // Name should be at least 5 characters long
    return typeof name === 'string' && name.trim().length >= 5;
}

function validatePassword(password) {
    // Password should be at least 5 characters long
    return typeof password === 'string' && password.trim().length >= 5;
}

module.exports = {
    signup: async function (req, res) {
        try {
            const { name, password } = req.body;

            if (!name || !password) {
                return res.badRequest('Please enter both name and password!');
            }

            // Validate name and password
            if (!validateName(name) || !validatePassword(password)) {
                return res.badRequest('Invalid name or password. Name should not be empty and password should be at least 5 characters long.');
            }

            const existingUser = await Register.findOne({ name: name });
            if (existingUser) {
                return res.badRequest('User already exists! Please choose a different name.');
            }

            // Hash the password using bcrypt
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(password, saltRounds);

            // Create the user
            const newUser = await Register.create({ name: name, password: hashedPassword }).fetch();

            // Send response
            res.ok(newUser);
        } catch (error) {
            sails.log.error(error);
            res.serverError('Something went wrong!');
        }
    },

    login: async function (req, res) {
        try {
            const { name, password } = req.body;

            if (!name || !password) {
                return res.badRequest('Please enter both name and password!');
            }

            // Validate name and password
            if (!validateName(name) || !validatePassword(password)) {
                return res.badRequest('Invalid name or password. Name should not be empty and password should be at least 5 characters long.');
            }

            const user = await Register.findOne({ name: name });
            if (!user) {
                return res.badRequest("Name doesn't exist. Check name or signup.");
            }

            // Compare the hashed password from the database with plaintext
            const isPasswordMatch = await bcrypt.compare(password, user.password);
            if (isPasswordMatch) {
                res.ok(user);
            } else {
                res.badRequest('Wrong password!');
            }
        } catch (error) {
            sails.log.error(error);
            res.serverError('Something went wrong!');
        }
    },

    admin: async function (req, res) {
        try {
            const { name, password } = req.body;

            if (!name || !password) {
                return res.badRequest('Please enter both name and password!');
            }

            // Validate name and password
            if (!validateName(name) || !validatePassword(password)) {
                return res.badRequest('Invalid name or password. Name should not be empty and password should be at least 5 characters long.');
            }

            const user = await Register.findOne({ name: name, isAdmin: true });

            if (!user) {
                return res.badRequest('Wrong details. Check details!');
            } else {
                const isPasswordMatch = await bcrypt.compare(password, user.password);
                if (isPasswordMatch) {
                    // Set session variables upon successful login
                    req.session.name = name;
                    req.session.isAdmin = true;

                    res.ok('Successfully logged in as admin!');
                } else {
                    res.badRequest('Wrong details. Check details!');
                }
            }
        } catch (error) {
            sails.log.error(error);
            res.serverError('Something went wrong!');
        }
    }
};
