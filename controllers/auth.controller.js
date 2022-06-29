require('dotenv').config();
const connectDB = require('../utils/connectdb');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//REGISTER HANDLE
const registerUser = async (req, res) => {
    try {
        const { user_name, email, password } = req.body;
        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(password, salt);
        //Check email used
        connectDB.query(
            'SELECT * FROM users WHERE email = ? ',
            [email],
            (err, results) => {
                if (err) throw err;
                if (results.length > 0) {
                    return res.json({ Message: 'Email is already in use!' });
                }
                //Create new user
                connectDB.query(
                    'INSERT INTO users SET ?',
                    {
                        user_name: user_name,
                        email: email,
                        password: passwordHash,
                    },
                    (err, results) => {
                        if (err) throw err;
                        return res.json({
                            Message: 'User has been registered!',
                        });
                        // return res.json({user_name: user_name, email: email, password: passwordHash});
                    },
                );
            },
        );
    } catch (error) {
        res.status(500).send(error);
    }
};

// LOGIN HANDLE
const loginUser = async (req, res) => {
    try {
        const { user_name, email, password } = req.body;
        connectDB.query(
            'SELECT * FROM users WHERE email = ?',
            [email],
            async (err, results) => {
                const comparePass = await bcrypt.compare(
                    password,
                    results[0].password,
                );
                if (!results || !comparePass) {
                    res.status(400).json({
                        Message: 'Username, email or password incorrect!',
                    });
                } else {
                    const email = results[0].email;

                    const token = jwt.sign({ email }, process.env.JWT_SECRET, {
                        expiresIn: process.env.JWT_EXPIRES_IN,
                    });

                    console.log('The token is ' + token);

                    const cookieOptions = {
                        expires: new Date(
                            Date.now() + process.env.JWT_COOKIE_EXPIRES * 1000,
                        ),
                        httpOnly: true,
                    };
                    res.cookie('userSave', token, cookieOptions);
                    res.redirect('/classes');
                }
            },
        );
    } catch (error) {
        res.status(500).send(error);
    }
};

const checkLoggedIn = async (req, res, next) => {
    try {
        //Verify the token
        const decoded = jwt.verify(
            req.cookies.userSave,
            process.env.JWT_SECRET,
        );
        // console.log(decoded);
        if (decoded) {
            next();
        }

        //Check if the user still exist
        connectDB.query(
            'SELECT * FROM users WHERE email = ?',
            [decoded.email],
            (err, results) => {
                // console.log(results);
            },
        );
    } catch (error) {
        return res.redirect('/user/login');
    }
};

const logoutUser = (req, res) => {
    res.cookie('userSave', 'token', {
        expires: new Date(Date.now()),
        httpOnly: true
    });
    res.redirect('/');
}

module.exports = {
    registerUser,
    loginUser,
    checkLoggedIn,
    logoutUser,
};
