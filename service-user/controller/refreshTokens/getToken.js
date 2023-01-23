const { RefreshToken } = require('../../models');

module.exports = async (req, res) => {
    const { refresh_token } = req.query;
    const token = await RefreshToken.findOne({
        where: {
            token: refresh_token
        }
    });

    if (!token) {
        return res.status(400).json({
            status: 'error',
            message: 'invalid token'
        });
    }

    return res.json({
        status: 'success',
        token
    });
}