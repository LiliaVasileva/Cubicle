const router = require('express').Router();
const Accessory = require('../models/Accessory')

router.get('/create', (req, res) => {
    res.render('createAccessory')

});

router.post('/create', async (req, res) => {
    const { name, imageUrl, description } = req.body;

    const accessory = await new Accessory({ name, imageUrl, description });

    // await Accessory.create({ame, imageUrl, description}}); one more way to creare items

    accessory.save();

    res.redirect('/')

});



module.exports = router;