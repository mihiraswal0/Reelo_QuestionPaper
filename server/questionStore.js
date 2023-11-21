const mongoose = require('mongoose');

const QuestionStore=new mongoose.Schema({
    question:{
        type: 'string',
        required: true,
    },
    subject:{
        type: 'string',
        required: true,
    },
    topic:{
        type: 'string',
        required: true,
    },
    difficulty:{
        type: 'string',
        required: true,
    },
    marks:{
        type:'Number',
        required: true,
    }
})

module.exports =mongoose.model('QuestionStore',QuestionStore);