const express = require('express');
const albumModel=require('../models/albumModel');
const router = express.Router();

router.route('/:photoId')

.get(function(req, res, next) {
  let end=parseInt(req.params.photoId) +1;
  /*
1-10
11-20
21-30
etc
  */
  let start=parseInt(req.params.photoId)-10;
  albumModel.find({id:{$gt:start,$lt:end}}).then(photos => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(photos);
  }, err => next(err))
  .catch(err => next(err));

  })

module.exports = router;
