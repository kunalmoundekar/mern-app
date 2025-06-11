const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/userModel');


const router = express.Router()


//now, we create different routes to interact with database

//1. Create (Post Method)

router.post("/send", async (req, res)=>{
    const {name, email, age} = req.body;

    try {
        const userAdded = await User.create({
            name: name,
            email: email,
            age: age
        })

        res.status(201).json(userAdded)

    } catch (error) {
        console.log(error)
        res.send(400).json({error: error.message})
    }
})


// 2. Read (Get Method)

router.get("/read", async (req, res)=>{

    try {
        const showAll = await User.find();

        res.status(200).json(showAll);
        return;

    } catch (error) {
        console.log(error)
        res.send(400).json({error: error.message})
    }

})


//3. Single User (Get Method)

router.get("/:id", async (req, res)=>{
    
    const {id} = req.params;

    try {
        const singleUser = await User.findById({_id: id})
        res.status(200).json(singleUser);

    } catch (error) {
        console.log(error)
        res.send(400).json({error: error.message})
    }

})

// 4. Delete

router.delete("/:id", async (req, res)=>{

    const {id} = req.params;

    try {
         const deleteUser = await User.findByIdAndDelete({_id: id})
 
         res.status(200).json(deleteUser)
 
     } catch (error) {
         
         console.log(error)
         res.send(500).json({error: error.message})
 
     }
 })



 // 5. Patch (update)

router.patch("/:id", async (req, res)=>{

    const {id} = req.params;
    const {name, email, age} = req.body;

    try {
         const updateUser = await User.findByIdAndUpdate(id, req.body, {
            new: true,
         })
 
         res.status(200).json(updateUser)
 
     } catch (error) {
         
         console.log(error)
         res.send(500).json({error: error.message})
 
     }
 })

module.exports = router;