const mongoose = require ("mongoose");

const userSchema = new mongoose.Schema({

number : {
    type: Number,
    required: true
},
word : {
    type: String,
    required: true
},
meaning : {
    type: String,
    required: true
},
example : {
    type: String,
    required: true
}
})

const Vocabdata = mongoose.model('engvocab',userSchema);
module.exports = Vocabdata;