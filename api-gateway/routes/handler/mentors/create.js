const apiAdapter = require('../../apiAdapter');
const {
    URL_SERVICE_COURSE
} = process.env;

const api = apiAdapter(URL_SERVICE_COURSE);

module.exports = async (req, res) => {
    try {
        const mentor = await api.post('/api/mentors', req.body);
        return res.json(mentor.data);
    } catch (err) {
        if (err.code == 'ECONNREFUSED') {
            return res.status(500).json({ status: 'error', message: 'service unavailable' });
        }
        const { status, data } = err.response;
        return res.status(status).json(data);
    }
}