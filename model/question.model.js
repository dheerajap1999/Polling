const express = require('express');
const app = express();
const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true,
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
    deletedAt: {
        type: Date,
    }
},{timestamps:true});

module.exports = mongoose.model("question", questionSchema );
