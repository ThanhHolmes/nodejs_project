const studentValidate = {};

studentValidate.addData = (req, res, next) => {
    if (req.body.fullname) {
        return next();
    } else {
        res.status(403).json({ Message: 'Fullname is required' });
    };
};

studentValidate.addData = (req, res, next) => {
    if (req.body.age > 15) {
        return next();
    } else {
        res.status(403).json({ Message: 'Age must be more than 15 years old' });
    };
};

module.exports = studentValidate;
