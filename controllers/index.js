const router = require('express').Router();

const apiRoutes = require('./api');

router.use('/api', apiRoutes);


// error handeling if route doesnt exist
router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;