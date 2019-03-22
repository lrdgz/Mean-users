const express = require("express");
const router = express.Router();

const User = require('../models/user');

//LIST TASK
router.get('/', async (req, res) => {

    const users = await User.find();
    res.json(users);

});

//SHOW ONE TASK
router.get('/:id', async (req, res) => {

    const User = await User.findById(req.params.id, req.body);
    res.json(user);


});

//ADD TASK
router.post('/', async (req, res) => {

    delete req.body._id;
    const user = new User(req.body);
    await user.save();
    res.json({ status: 'User Saved' });

});

//UPDATE TASK
router.put('/:id', async (req, res) => {

    delete req.body.id;
    await User.findByIdAndUpdate(req.params.id, req.body);
    res.json({ status: 'User Updated' });

});

//REMOVE TASK
router.delete('/:id', async (req, res) => {

    await User.findByIdAndRemove(req.params.id, req.body);
    res.json({ status: 'User Deleted' });

});


//ESPORT ROUTES
module.exports = router;