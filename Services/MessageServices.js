const MessageModel = require('../models/MessageModel');
const ConversationModel = require('../models/ConversationModel');
const catchAsync = require('../utils/catchAsync');
const mongoose = require('mongoose');

/***************Services************/

//Add New Message-->
exports.Add = catchAsync(async (req, res, next) => {
    console.log("Message hit==>", req.body)
    try {
        //saved message here
        const Message = await MessageModel.create(req.body)
        console.log("Message", Message)

        //checking condition in From User ConversationModel
        const ConversationFrom = await ConversationModel.find({
            User: req.body.From,
            Recipients: req.body.To
        })
        console.log("ConversationFrom--Check", ConversationFrom)
        if (!ConversationFrom[0]) {
            const FromNewRecipients = await ConversationModel.find({ User: req.body.From })
            FromNewRecipients[0].Recipients.push(req.body.To)
            FromNewRecipients[0].save()
        }

        //checking condition in To User ConversationModel
        const ConversationTo = await ConversationModel.find({
            User: req.body.To,
            Recipients: req.body.From
        })
        console.log("ConversationTo--Check", ConversationTo)
        if (!ConversationTo[0]) {

            const ToNewRecipients = await ConversationModel.find({ User: req.body.To })
            ToNewRecipients[0].Recipients.push(req.body.From)
            ToNewRecipients[0].save()

        }

        return res.status(201).json({
            success: true, message: "Message Sent successfully", Message
        })

    } catch (error) {
        console.log('Error ==>', error)
        throw new Error("Message Sending Failed")
    }



})


exports.GetAllMessages = catchAsync(async (req, res, next) => {
    console.log("Message hit==>", req.body)
    let user1 = mongoose.Types.ObjectId(req.body.To);
    let user2 = mongoose.Types.ObjectId(req.body.From);
    console.log("user1==>", user1)
    console.log("user2==>", user2)
    try {
        const Message = await MessageModel.aggregate([

            //     {
            //     $lookup: {
            //         from: 'users',
            //         localField: 'To',
            //         foreignField: '_id',
            //         as: 'To',
            //     },
            // },
            //     {
            //     $lookup: {
            //         from: 'users',
            //         localField: 'From',
            //         foreignField: '_id',
            //         as: 'From',
            //     },
            // },

            {
                $match: {
                    $or: [
                        { $and: [{ To: user1 }, { From: user2 }] },
                        { $and: [{ To: user2 }, { From: user1 }] },
                    ],
                }
            }
        ])

        console.log("Message", Message)

        if (!Message[0]) {
            return res.status(500).json({
                success: false, message: "No Message sent Yet"
            })
        }
        return res.status(200).json({
            success: true, message: "Message Record Found", Message
        })

    } catch (error) {
        console.log('Error ==>', error)
        throw new Error("No Message sent Yet")
    }



})

exports.GetAllConversations = catchAsync(async (req, res, next) => {
    console.log("Message hit==>", req.body)

    try {
        const Message = await ConversationModel.aggregate([

            {
                $lookup: {
                    from: 'users',
                    localField: 'Recipients',
                    foreignField: '_id',
                    as: 'Recipients',
                },
            },
            {
                $match: {
                    User: mongoose.Types.ObjectId(req.body.From)
                }
            }
        ])

        console.log("Message", Message)

        if (!Message[0]) {
            return res.status(500).json({
                success: false, message: "No Message sent Yet"
            })
        }
        return res.status(200).json({
            success: true, message: "Chat Record Found", Message
        })

    } catch (error) {
        console.log('Error ==>', error)
        throw new Error("No Message sent Yet")
    }



})
