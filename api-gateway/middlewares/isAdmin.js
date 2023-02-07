module.exports = (req, res, next) => {
    if (req.user.data.role == 'admin') {
        return next();
    } else {
        return res.status(401).json({ message: 'You do not have access to this feature' });
    }
}