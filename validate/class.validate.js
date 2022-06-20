const classValidate = {};

classValidate.updateClass = (req, res, next) => {
    if (req.body.classcode) {
        return next();
    }
    res.status(403).json({ Message: 'Classcode is required' });

    if (req.body.classname) {
        return next();
    }
    res.status(402).json({ Message: 'Classname is required' });
};

module.exports = classValidate;
