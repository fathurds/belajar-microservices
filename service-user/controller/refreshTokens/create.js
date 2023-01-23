const {
    User,
    RefreshToken
} = require('../../models');
const Validator = require('fastest-validator');
const v = new Validator();

module.exports = async (req, res) => {
    const { user_id, refresh_token } = req.body;

    const schema = {
        user_id: 'number',
        refresh_token: 'string'
    }

    const validate = v.validate(req.body, schema);
    if (validate.length) {
        return res.status(400).json({
            status: 'error',
            message: validate
        });
    }

    const user = await User.findByPk(user_id);
    if (!user) {
        return res.status(404).json({
            status: 'error',
            message: 'user not found'
        });
    }

    const createdRefreshToken = await RefreshToken.create({ token: refresh_token, user_id });

    return res.json({
        status: 'success',
        data: {
            id: createdRefreshToken.id
        }
    });
}