const registerUser = (req, res, next) => {
    const { user_name, email, password, passwordConfirm} = req.body;

    if (!user_name || !email || !password || !passwordConfirm) {
        return res.status(400).json({ Message: 'Please enter all field!' });
    } 

    if (password.length < 3 || password != passwordConfirm) {
        return res
            .status(400)
            .json({
                Message:
                    'Password must be at least 6 character and password do not match!',
            });
    }
    next();
};

const loginUser = (req, res, next) => {
    const {email, password} = req.body;
    if (!email || !password) {
        return res.status(400).json({Message: 'Please provide an email and password!'})
    }
    next();
}
module.exports = {
    registerUser,
    loginUser,
};
