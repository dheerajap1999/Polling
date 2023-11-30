const questionModel = require('../model/question.model');
const optionModel = require('../model/options.model');
require('dotenv').config()

const PORT = process.env.PORT || 8080;

// To create a questions
const createQuestion = async (req,res) => {
    try{
        let createQuestionPayload = {
            title: req.body.title
        }
        const question = new questionModel(createQuestionPayload);
        await question.save()
        res.status(201).send({"status":"true","data":question})
    }
    catch (error){
        res.status(500).send({"status":"false","error":error.message})
    }
}

// To create a option
const createOption = async (req,res) => {
    try{
        const options = [...req.body.options];
        const createOptionPayload = [];
        for(let option of options){
            let createOptionPayloadObj = {
                questionId: req.params.id,
                text: option.text,
            }
            createOptionPayload.push(createOptionPayloadObj);
        }
        const optionResp = await optionModel.insertMany(createOptionPayload)
        await question.save()
        res.status(201).send({"status":"true","data":optionResp})
    }
    catch (error){
        res.status(500).send({"status":"false","error":error.message})
    }
}

// To delete a question
const deleteQuestion = async (req,res) => {
    try{
        const questionId = req.params.id;

        await questionModel.updateOne(
            { _id: questionId },
            { $set: { isDeleted: true, deletedAt: new Date() } }
        );
        res.status(200).send({"status":"true","message":"Question deleted successfully"})
    }
    catch (error){
        res.status(500).send({"status":"false","error":error.message})
    }
}

// To delete a option
const deleteOption = async (req,res) => {
    try{
        const optionId = req.params.id;

        await optionModel.updateOne(
            { _id: optionId },
            { isDeleted: true, deletedAt: new Date() }
        )

        return res.status(200).send({ status: true, message: "Options delete successfully" })
    }
    catch (error){
        res.status(500).send({"status":"false","error":error.message})
    }
}

const voteOption = async (req, res) => {
    try {
        const optionId = req.params.id;

        const updateOptionVote = await optionModel.findOneAndUpdate(
            { _id: optionId, isDeleted: false },
            { $inc: { votes: 1 } },
            { new: true }
        );

        if(updateOptionVote) {
            // Respond with success message
            return res.status(200).json({ status: true, message: 'Vote counted successfully', data: updateOptionVote });
        }

        // Respond with success message
        return res.status(400).json({ status: true, message: 'Something went wrong' });
    } catch (error) {
        // Handle errors
        res.status(500).send({ status: false, message: error.message });
    }
};

// To get a single question
const getSingleQuestion = async (req,res) => {
    try{
        const questionId = req.params.id;
        const question = await questionModel.findOne({_id: questionId, isDeleted: false});
        let options = await optionModel.find({ questionId: questionId, isDeleted: false }).select({ text: 1, votes: 1 }).lean();

        options.map((option) => {
            option.link_to_vote = `http://localhost:${PORT}/options/${option._id}/add_vote`;
        })


        const responseObj = {
            _id: question.id,
            title: question.title,
            options: options,
        }

        res.status(200).send({"status":"true","data":responseObj})
    }
    catch (error){
        res.status(500).send({"status":"false","error":error.message})
    }
}

module.exports = {
    createQuestion,
    getSingleQuestion,
    deleteQuestion,
    createOption,
    deleteOption,
    voteOption,
}