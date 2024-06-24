import Donate from "../models/bookModel.js";
import asyncHandler from "../middlewares/asyncHandler.js";


export const createdonate = asyncHandler(async (req, res, next) => {

    const {name,booktitle,phonenumber,email}=req.body;

    const result=await Donate.create({name,booktitle,phonenumber,email});

    return res.json(
        {
            message:"Submit"
        }
    )
  });