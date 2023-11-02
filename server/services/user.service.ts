import userModel from "../models/user.model";
import { Response } from "express";
import { redis } from "../utils/redis";

// get user by id
export const getUserById = async (id: string, res: Response) => {
    let userJson = await redis.get(id);
    let user;
    if(userJson)user = JSON.parse(userJson);
    res.status(201).json({
        success: true,
        user
    })
}