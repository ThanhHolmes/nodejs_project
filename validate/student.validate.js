const addData = (req, res, next) => {
    const {fullname, age} = req.body;
    if (!fullname || !age || (age < 15)) {
        return res.status(400).json({Message: "Fullname & Age is required and Age must be more than 15 years old"})
    };
    next();
};
module.exports = {
    addData,
}
