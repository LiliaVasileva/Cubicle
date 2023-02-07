
const Cube = require('../models/Cube')
const Accessory = require('../models/Accessory')


exports.getCreateCube = (req, res) => {
    res.render('create');
};

exports.postCreateCube = async (req, res) => {
    const { name, description, imageUrl, difficultyLevel } = req.body;

    let cube = new Cube({ name, description, imageUrl, difficultyLevel });

    await cube.save();

    res.redirect('/');
};

exports.getCubeDetails = async (req, res) => {

    const cube = await Cube.findById(req.params.cubeId).populate('accessories').lean();

    if (!cube) {
        return res.redirect('/404');
    }

    res.render('details', { cube })
};

exports.getAttchedAccessory = async (req, res) => {

    const cube = await Cube.findById(req.params.cubeId).lean();
    const accessories = await Accessory.find({_id: {$nin: cube.accessories}}).lean();
    

    res.render('attachAccessory', { cube, accessories });

};


exports.postAttachAccessory = async (req, res) => {

    const cube = await Cube.findById(req.params.cubeId);
    const accessoryId = req.body.accessory;
    cube.accessories.push(accessoryId);
    await cube.save();

    res.redirect(`/details/${cube._id}`)

};