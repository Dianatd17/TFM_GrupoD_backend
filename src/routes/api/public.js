const router = require('express').Router();

const PublicController = require('../../controllers/public.controller');

router.get('/', PublicController.getByRating);

module.exports = router;
