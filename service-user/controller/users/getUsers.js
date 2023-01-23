const { User } = require('../../models');

module.exports = async (req, res) => {
    const userIds = req.query.user_ids || [];
    const { role } = req.query;
    const sqlOptions = {
        attributes: ['id', 'name', 'email', 'role', 'profession', 'avatar']
    }

    if (role) {
        sqlOptions.where = { role }
    }

    if (userIds.length) {
        sqlOptions.where = {
            id: userIds
        }
    }

    const users = await User.findAll(sqlOptions);

    return res.json({
        status: 'success',
        data: users
    })
}