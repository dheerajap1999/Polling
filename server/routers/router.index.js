const express = require('express');

const {createQuestion, getSingleQuestion,deleteQuestion,
    createOption,deleteOption, voteOption } = require('../controllers/controller.index')

const router = express.Router();


router.post('/questions/create',createQuestion) //To create a questions
router.post('/questions/:id/options/create',createOption) 
router.delete('/questions/:id',deleteQuestion) //To delete a question
router.delete('/options/:id/delete',deleteOption) //To delete a option
router.get('/options/:id/add_vote',voteOption) //To vote a option
router.get('/questions/:id',getSingleQuestion) //To get single question



module.exports = router;