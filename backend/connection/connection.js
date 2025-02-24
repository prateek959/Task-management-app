import mongoose from "mongoose";

const db = async (req, res) =>{
    try {
        const response = await mongoose.connect(process.env.MONGO_URI);
        if(response){
            console.log('Connected to DB');
        }
    } catch (error) {
     console.log(error.message);
     res.status(500).json({message:"Internal Server Error"});   
    }
};

export default db; 