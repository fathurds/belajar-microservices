const apiAdapter = require('../../apiAdapter');
const {
    URL_SERVICE_COURSE, URL_HOSTNAME
} = process.env;

const api = apiAdapter(URL_SERVICE_COURSE);

module.exports = async (req, res) => {
    try {
        const courses = await api.get('/api/courses', {
            params: {
                ...req.query
            }
        });

        const coursesData = courses.data;
        const firstPage = coursesData.data.first_page_url.split('?').pop();
        const lastPage = coursesData.data.last_page_url.split('?').pop();

        coursesData.data.first_page_url = `${URL_HOSTNAME}/courses?${firstPage}`;
        coursesData.data.last_page_url = `${URL_HOSTNAME}/courses?${lastPage}`;

        if (coursesData.data.prev_page_url) {
            const prevPage = coursesData.data.prev_page_url.split('?').pop();
            coursesData.data.prev_page_url = `${URL_HOSTNAME}/courses?${prevPage}`;
        }

        if (coursesData.data.next_page_url) {
            const nextPage = coursesData.data.next_page_url.split('?').pop();
            coursesData.data.next_page_url = `${URL_HOSTNAME}/courses?${nextPage}`;
        }

        coursesData.data.path = `${URL_HOSTNAME}/courses`;

        coursesData.data.links = undefined;


        return res.json(coursesData);
    } catch (err) {
        if (err.code == 'ECONNREFUSED') {
            return res.status(500).json({ status: 'error', message: 'service unavailable' });
        }
        const { status, data } = err.response;
        return res.status(status).json(data);
    }
}