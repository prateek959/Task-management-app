import  jwt  from "jsonwebtoken";
import User from "../models/user.js";
import argon2 from 'argon2';

const register = async (req, res) =>{
    try {
        const {username, email, password} = req.body;

        const hashPass = await argon2.hash(password);

        const newUser = new User({
            username,
            email,
            password:hashPass
        });

        await newUser.save();

        res.status(201).json(newUser);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({message:"Something went wrong"});
    }
};

const login = async (req, res) =>{
    try {
        const {email, password} = req.body;

        const userData = await User.findOne({email:email});
        if(!userData){
            return res.status(401).json({message:"Username or Password is invalid"})
        }

        const hashPass = await argon2.verify(userData.password, password);

        if(!hashPass){
            return res.status(401).json({message:"Username or Password is invalid"})
        }
 
        const token = await jwt.sign({
            id:userData._id,
            email:userData.email
        },process.env.JWT_SECRET_KEY, {expiresIn:"1h"});

        res.status(200).json({message:"Login Successfully",token:token});

    } catch (error) {
        console.log(error.message);
        res.status(500).json({message:"Something went wrong"});
    }
}

export {register, login};
