const mongoose = require('mongoose');

const FormDataSchema = new mongoose.Schema({

    name : String,
    email: String,
    password: String,
    role: { type: String, enum: ['student', 'mentor'], required: true },
})

const FormDataModel = mongoose.model('log_reg_form', FormDataSchema);

module.exports = FormDataModel;
