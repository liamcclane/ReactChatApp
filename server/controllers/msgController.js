let mongoose = require('mongoose'),
    MsgSchema = mongoose.model('Message');

module.exports = {
    index: (req, res) => {
        MsgSchema.find()
            .catch(err => res.json(err))
            .then(data => res.json(data))
    },
    show: (req, res) => {
        MsgSchema.findOne({ _id: req.params.msgId })
            .catch(err => res.json(err))
            .then(data => res.json(data))
    },
    update: (req, res) => {
        MsgSchema.update(
            { _id: req.params.msgId },
            req.body,
            { new: true, runValidators: true })
            .catch(err => res.json(err))
            .then(data => res.json(data))
    },
    create: (req, res) => {
        let m = new MsgSchema(req.body);
        m.save()
            .catch(err => res.json(err))
            .then(data => res.json(data))
    }
}