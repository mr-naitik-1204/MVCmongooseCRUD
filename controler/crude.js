const Mvc = require('../model/Mvc')


exports.get = async(req, res, next) => {
    const alldata = await Mvc.find()
    res.render('crud', { alldata, editdata: null })
}

exports.create = async (req, res, next) => {
        const data = req.body;
        if (data.id) {
            await Mvc.findByIdAndUpdate(data.id, data);
            console.log('Update:', data);
        } else {
            await Mvc.create(data);
            console.log('Create:', data);
        }
        res.redirect('/crud');     
   
};


exports.delete = async(req, res, next) => {
    const Did = req.query.delet;
    await Mvc.findByIdAndDelete(Did);
    console.log(Did);
    res.redirect('/crud');
}

exports.updete = async(req, res, next) => {
    const editId = req.query.up;
    const editdata = await Mvc.findById(editId);
    const alldata = await Mvc.find();
    res.render('crud', { editdata, alldata });
};


