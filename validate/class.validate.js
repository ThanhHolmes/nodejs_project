const updateClass = (req, res, next) => {
    const {classcode, classname} = req.body;
    if (!classcode || !classname) {
        return res.status(400).json({Message: "Classcode and classname is require"});
    };
    next();
};

module.exports = {
    updateClass,
}
